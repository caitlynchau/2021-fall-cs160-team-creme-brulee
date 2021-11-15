import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import SignIn from '../pages/SignIn';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log(data);

  return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/signin" component={SignIn}/>
            <Route path="/feed" component={Feed}/>
          </Switch>  
        </div>
      </Router>
  );
}

export default App;
