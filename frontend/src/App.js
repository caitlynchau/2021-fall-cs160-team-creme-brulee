import React from 'react';
import './App.css';
import Navigation from './modules/Shell/Navigation';
import Home from './pages/Home';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Home />
      <header className="App-header">
        <p>{!data ? 'Briefcase' : data}</p>
      </header>
    </div>
  );
}

export default App;
