import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import Feed from "../pages/Feed";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/feed" component={Feed}/>
          </Switch>
          {/* <Home /> */}
          {/* TODO: remove this */}
          {/* <header className="App-header">
            <p>{!data ? "Briefcase" : data}</p>
          </header> */}
          {console.log(data)}
        </div>
      </Router>
  );
}

export default App;
