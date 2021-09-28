import React from "react"
import logo from './briefcase.png';
import './App.css';
import Navigation from './Navigation';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
      }, []);

  return (
    <div className="App">
      <Navigation/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{!data ? "Briefcase" : data}</p>
        </header>
    </div>
  );
}

export default App;
