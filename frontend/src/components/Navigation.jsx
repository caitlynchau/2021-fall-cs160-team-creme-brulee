import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetUser } from '../redux/userSlice';

/**
 * Navigation bar
 * @returns {node}
 */
function Navigation() {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  console.log('current user', currentUser);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Briefcase</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {currentUser !== '' &&
              <li className="nav-item">
              <button type="button" className="btn btn-light" onClick={() => {history.push("/feed")}}>Feed</button>
              </li>
            }
          </ul>

          {currentUser !== '' &&
            <form className="d-flex nav-btn">
              <button 
                className="btn btn-outline-dark" 
                type="button"
                onClick={() => {
                  history.push("/upload");
                }}>
                  Upload
              </button>
            </form>  
          }

          {currentUser !== '' &&
            <form className="d-flex nav-btn">
              <button 
                className="btn btn-outline-dark" 
                type="button"
                onClick={() => {
                  history.push(`/profile/${currentUser}`);
                }}>
                  Profile
              </button>
            </form>  
          }

          <form className="d-flex nav-btn">
            <button 
              className="btn btn-outline-dark" 
              type="button"
              onClick={() => {
                if (currentUser !== '') dispatch(resetUser());
                history.push("/signin");
              }}>
                {currentUser === '' ? 'Login' : 'Logout'}
            </button>
          </form>  
          
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
