import React from 'react';
import { Box, Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Home() {
  const [newUser, setNewUserForm] = React.useState(false);

  const history = useHistory();
  const goToLandingPage = () => history.push('/feed');

  return (
    <>
      <div className="home">
        <Card className="home-card"> 
          {!newUser ?
            <Box className="card-form">
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
              <Box mt={2}>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={goToLandingPage}
                >
                  Submit
                </button>
                <Box
                  component="a"
                  onClick={() => setNewUserForm(true)}
                  ml={2}
                >
                  New User?
                </Box>
              </Box>
            </Box>
          : <Box className="card-form">
              {/* Username */}
              <div>
                <label className="form-label">Username</label>
                <input type="text" className="form-control"/>
              </div>
              {/* Password */}
              <label className="form-label">Password</label>
              <input type="password" className="form-control"/>
              <Box mt={2}>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={goToLandingPage}
                >
                  Submit
                </button>
                <Box
                  component="a"
                  onClick={() => setNewUserForm(false)}
                  ml={2}
                >
                  Returning User?
                </Box>
              </Box>
            </Box>
          }
        </Card>
      </div>
    </>
  );
}

export default Home;
