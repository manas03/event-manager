import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Events from "./Components/Events";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="hk">
        <Navbar />
        <Route exact path="/addevent" component={Events} />
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
