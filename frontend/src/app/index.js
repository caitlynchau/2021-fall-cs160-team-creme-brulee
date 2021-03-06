import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Admin from "../pages/Admin";
import SignIn from '../pages/SignIn';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';


function App() {
  return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/signin" component={SignIn}/>
            <Route path="/feed" component={Feed}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/upload" component={Upload} />
            <Route exact path="/profile/:username" component={Profile} />
          </Switch>  
        </div>
      </Router>
  );
}

export default App;
