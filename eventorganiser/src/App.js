import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Events from "./Components/Events";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import Festform from "./Components/Festform";
import Festdashboard from "./Components/Festdashboard";
import LoginUser from "./Components/LoginUser";
import RegisterUser from "./Components/RegisterUser";
import CreateProfile from "./Components/profile/CreateProfile";
import Profile from "./Components/profile/Profile";
import EditProfile from "./Components/profile/EditProfile";
import AddEducation from "./Components/add-creds/AddEducation";
import StudentDash from "./Components/student-dashboard/StudentDash";
import Event from "./Components/event/Event";
import RegisterOrganiser from "./Components/RegisterOrganiser";
import LoginOrganiser from "./Components/LoginOrganiser";
import AddEvent from "./Components/AddEvent";
import OrganiserEvent from "./Components/OrganiserEvent";
import Organiserdata from "./Components/Organiserdata";
import Fest from "./Components/Fest";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user nd isAuthenti
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // Clear current profile
    // store.dispatch(clearCurrentProfile());
    // redirect to login page
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="hk">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/registerorganiser"
            component={RegisterOrganiser}
          />

          <Route exact path="/login" component={LoginOrganiser} />
          <Route exact path="/loginuser" component={LoginUser} />
          <Route exact path="/registeruser" component={RegisterUser} />
          <Route exact path="/addevent" component={AddEvent} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addfest" component={Festform} />
          <Route exact path="/create-profile" component={CreateProfile} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route exact path="/festdashboard" component={Festdashboard} />
          <Route exact path="/profile/:handle" component={Profile} />
          <Route exact path="/event/:_id" component={Event} />
          <Route exact path="/add-edu" component={AddEducation} />
          <Route exact path="/studentdash" component={StudentDash} />
          <Route exact path="/eventdash" component={OrganiserEvent} />
          <Route exact path="/data" component={Organiserdata} />
          <Route exact path="/fest/:id" component={Fest} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
