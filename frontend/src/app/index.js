import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import Navigation from "../components/Navigation";
import Home from "../pages/Home";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            {/*<Route path="/users/create" exact component={CreateUser} />*/}
          </Switch>
          <Home />
          <header className="App-header">
            <p>{!data ? "Briefcase" : data}</p>
          </header>
        </div>
      </Router>
  );
}

export default App;
