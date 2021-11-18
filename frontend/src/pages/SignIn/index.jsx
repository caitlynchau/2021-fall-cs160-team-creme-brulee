import React from 'react';
import { Box, Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import apis from '../../api';

function SignIn() {
  const [signUpEmail, setSignUpEmail] = React.useState('');
  const [signUpUser, setSignUpUser] = React.useState('');
  const [signUpPass, setSignUpPass] = React.useState('');
  const [signInPass, setSignInPass] = React.useState('');
  const [signInUser, setSignInUser] = React.useState('');

  const [newUser, setNewUserForm] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(null);

  const history = useHistory();
  const goToLandingPage = () => history.push('/feed');

  const payload = {signUpUser, signUpEmail, signUpPass}; 

  const onSignUp = () => {
    apis.createUser(payload).then((response) => {
      setUserInfo(response.data);
      console.log(response.data);
    });
    
  };

  return (  
    <>
      <div className="home">
        <Card className="home-card"> 
          {!newUser ?
            <Box className="card-form">
              {/* Email */}
              <div> 
                <label className="form-label">Email address</label>
                <input onChange={(e) => setSignUpEmail(e.target.value)} type="email" className="form-control" placeholder="name@example.com"/>
              </div>
              {/* Username */}
              <div>
                <label className="form-label">Username</label>
                <input onChange={(e) => setSignUpUser(e.target.value)} type="text" className="form-control"/>
              </div>
              {/* Password */}
              <label className="form-label">Password</label>
              <input onChange={(e) => setSignUpPass(e.target.value)} type="password" className="form-control"/>
              <Box mt={2}>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={onSignUp}
                >
                  Submit
                </button>
                <Box
                  component="a"
                  onClick={() => setNewUserForm(true)}
                  ml={2}
                >
                  Returning User?
                </Box>
              </Box>
            </Box>
          : <Box className="card-form">
              {/* Username */}
              <div>
                <label className="form-label">Username</label>
                <input onChange={(e) => setSignInUser(e.target.value)} type="text" className="form-control"/>
              </div>
              {/* Password */}
              <label className="form-label">Password</label>
              <input onChange={(e) => setSignInPass(e.target.value)} type="password" className="form-control"/>
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
                  New User?
                </Box>
              </Box>
            </Box>
          }
        </Card>
      </div>
    </>
  );
}

export default SignIn;
