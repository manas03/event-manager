import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Events from "./Components/Events";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import Festform from "./Components/Festform";
import Festdashboard from "./Components/Festdashboard";

function App() {
  return (
    <Router>
      <div className="hk">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/addevent" component={Events} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addfest" component={Festform} />
        <Route exact path="/festdashboard" component={Festdashboard} />

      </div>
    </Router>
  );
}

export default App;
