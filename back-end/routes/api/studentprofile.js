const express=require('express')
const router= express.Router();
const mongoose =require('mongoose')
const passport=require('passport')


const validateStudentProfileInput=require('../../validation/profile')
const validateExperienceInput=require('../../validation/experience')
const validateEducationInput=require('../../validation/education')

const StudentProfile=require('../../models/StudentProfile')
const Student=require('../../models/Student')


router.get('/test',(req,res)=> res.json({msg: "StudentProfile works"}))

router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const errors={}
    StudentProfile.findOne({user:req.user.id})
    .populate('user',['name','avatar'])
   .then(studentprofile =>{
       if(!studentprofile){
           errors.nostudentprofile="There is no StudentProfile for user"
           return res.status(404).json(errors)
       }
       res.json(studentprofile)
   })
   .catch(err=>res.status(404).json(err))    
})
router.get('/all',(req,res)=>{
    StudentProfile.find()
    .populate('user',['name','avatar'])
    .then(studentprofiles=>{
        if(!studentprofiles){
            errors.nostudentprofile='There are no StudentProfiles';
            return res.status(404).json(errors)
        }
        res.json(studentprofiles)
    })
    .catch(err => res.status(404).json({studentprofile:'There are no StudentProfiles'}));
});
router.get('/handle/:handle',(req,res)=>{
    const errors= {}
    StudentProfile.findOne({handle:req.params.handle})
    .populate('user',['name','avatar'])
    .then(studentprofile=>{
        if(!studentprofile){
            errors.nostudentprofile='There is no StudentProfile for users'
            res.status(404).json(errors)
        }
        res.json(studentprofile);

    })
    .catch(err => res.status(404).json(err));
});

router.get('/user/:user_id',(req,res)=>{
    const errors= {};
    StudentProfile.findOne({user:req.params.user_id})
    .populate('user',['name','avatar'])
    .then(studentprofile=>{
        if(!studentprofile){
            errors.nostudentprofile='There is no StudentProfile for users'
            res.status(404).json(errors)
        }
        res.json(studentprofile);

    })
    .catch(err => res.status(404).json({studentprofile:'There is no StudentProfile for that user id'}));
});

router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const{errors,isValid}=validateStudentProfileInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }
    const StudentProfileFields={};
    StudentProfileFields.user=req.user.id
    if(req.body.handle) StudentProfileFields.handle =req.body.handle;
    if(req.body.firstname) StudentProfileFields.firstname =req.body.firstname;
    if(req.body.lastname) StudentProfileFields.lastname =req.body.lastname;
    if(req.body.gender) StudentProfileFields.gender =req.body.gender;
    if(req.body.phoneno) StudentProfileFields.phoneno =req.body.phoneno;
    if(req.body.dateofbirth) StudentProfileFields.dateofbirth =req.body.dateofbirth;
    
    if(req.body.website) StudentProfileFields.website =req.body.website;
    if(req.body.resume) StudentProfileFields.resume =req.body.resume;
    if(req.body.bio) StudentProfileFields.bio =req.body.bio;
    if(req.body.profilephoto) StudentProfileFields.profilephoto =req.body.profilephoto;
    if(req.body.githubusername) StudentProfileFields.githubusername =req.body.githubusername;
    //Skills
    if(typeof req.body.skills !== 'undefined'){
        StudentProfileFields.skills =req.body.skills.split(',')
    }
    //social
    StudentProfileFields.social={};
    if(req.body.youtube) StudentProfileFields.social.youtube =req.body.youtube;
    if(req.body.twitter) StudentProfileFields.social.twitter =req.body.twitter;
    if(req.body.facebook) StudentProfileFields.social.facebook =req.body.facebook;
    if(req.body.linkedin) StudentProfileFields.social.linkedin =req.body.linkedin;
    if(req.body.instagram) StudentProfileFields.social.instagram =req.body.instagram;
    if(req.body.discord) StudentProfileFields.social.discord =req.body.discord;
      
    StudentProfile.findOne({user:req.user.id})
     .then(studentprofile=>{
         if(studentprofile)
         {
             studentprofile.findOneAndUpdate({user:req.user.id}, {$set :StudentProfileFields},{new:true})
              .then(studentprofile=>res.json(studentprofile))
         } else {
             StudentProfile.findOne({handle:StudentProfileFields.handle}).then(studentprofile=>{
                 if(studentprofile){
                     errors.handle="That handle already exists"
                     res.status(400).json(errors)
                 }

                 new StudentProfile(StudentProfileFields).save().then(studentprofile=>res.json(studentprofile))
             })
         }
     })
    
});
router.post('/experience',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const{errors,isValid}=validateExperienceInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }
    StudentProfile.findOne({user:req.user.id})
    .then(studentprofile=>{
        const newExp={
            title:req.body.title,
            company:req.body.company,
            location:req.body.location,
            from:req.body.from,
            to:req.body.to,
            current:req.body.current,
            description:req.body.description
        }
        studentprofile.experience.unshift(newExp);

        studentprofile.save().then(studentprofile =>res.json(studentprofile) )

    })
})
router.post('/education',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const{errors,isValid}=validateEducationInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }
    StudentProfile.findOne({user:req.user.id})
    .then(studentprofile=>{
        const newEdu={
            school:req.body.school,
            degree:req.body.degree,
            fieldofstudy:req.body.fieldofstudy,
            from:req.body.from,
            to:req.body.to,
            current:req.body.current,
            description:req.body.description
        }
        studentprofile.education.unshift(newEdu);

        studentprofile.save().then(studentprofile =>res.json(studentprofile) )

    })
})
/*router.delete('/experience/:exp_id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    
    StudentProfile.findOne({user:req.user.id})
    .then(StudentProfile=>{
        const removeIndex=StudentProfile.experience
         .map(item=>item.id)
         .indexOf(req.params.exp_id);

         StudentProfile.experience.splice(removeIndex,1)

         StudentProfile.save().then(StudentProfile=>res.json(StudentProfile))
     
    }).catch(err=>res.status(404).json(err))
})
router.delete('/education/:edu_id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    
    StudentProfile.findOne({user:req.user.id})
    .then(StudentProfile=>{
        const removeIndex=StudentProfile.education
         .map(item=>item.id)
         .indexOf(req.params.edu_id);

         StudentProfile.education.splice(removeIndex,1)

         StudentProfile.save().then(StudentProfile=>res.json(StudentProfile))
     
    }).catch(err=>res.status(404).json(err))
})
router.delete('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    StudentProfile.findOneAndRemove({user:req.user.id})
    .then(()=>{
        User.findOneAndRemove({_id:req.user.id})
        .then(()=>res.json({Success:true}))
    })
})*/
module.exports=router;
