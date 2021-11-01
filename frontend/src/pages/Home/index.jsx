import React from 'react';
import { Box, Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const goToLandingPage = () => history.push('/feed');

  return (
    <>
      <div className="home">
        <Card>
          <Box className="signup-container">
            {/* Email */}
            <div> 
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com"/>
            </div>
            {/* Username */}
            <div>
            <label className="form-label">Username</label>
              <input type="text" className="form-control"/>
            </div>
            {/* Password */}
            <label className="form-label">Password</label>
            <input type="password" className="form-control"/>
            <button 
              type="submit" 
              className="btn btn-primary"
              onClick={goToLandingPage}>Submit</button>
          </Box>
        </Card>
      </div>
    </>
  );
}

export default Home;
