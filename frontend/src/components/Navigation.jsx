import React from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Navigation bar
 * @returns {node}
 */
function Navigation() {
  const history = useHistory();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Briefcase</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Locations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Food</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Inspiration</a>
            </li>
          </ul>

          <form className="d-flex">
            <button 
              className="btn btn-outline-success" 
              type="button"
              onClick={() => {
                history.push("/signin");
              }}>
                Log In
            </button>
          </form>          
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
