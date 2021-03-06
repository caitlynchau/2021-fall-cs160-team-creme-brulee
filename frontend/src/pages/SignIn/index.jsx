import React, { useCallback, useEffect } from 'react';
import { Box, Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import apis from '../../api';

function SignIn() {
  const dispatch = useDispatch();

  const [signUpEmail, setSignUpEmail] = React.useState('');
  const [signUpUser, setSignUpUser] = React.useState('');
  const [signUpPass, setSignUpPass] = React.useState('');
  const [signInPass, setSignInPass] = React.useState('');
  const [signInUser, setSignInUser] = React.useState('');

  const [newUser, setNewUserForm] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(null);

  const history = useHistory();
  const goToLandingPage = useCallback(() => {
    history.push('/feed');
  }, [history]);

  const onSignUp = () => {
    const payload = {signUpUser, signUpEmail, signUpPass}; 
    apis.createUser(payload).then((response) => {
      setUserInfo(response.data);
    }).catch((error) => {
      window.alert('Could not create new user.');
    })
  };

  const onSignIn = () => {
    const payload = {signInUser, signInPass};
    apis.authenticateUser(payload).then((response) => {
      setUserInfo(response.data);
    }).catch(error => {
      window.alert('Incorrect username or password.');
    });
  };

  // navigate to feed upon successful sign in or sign up
  useEffect(() => {
    if (userInfo && userInfo.success) {
      dispatch(setUser(userInfo.data.username));
      goToLandingPage();
    }
  }, [userInfo, goToLandingPage, dispatch])

  return (  
    <div>
      <div className="signin">
        <Card className="signin-card"> 
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
                  onClick={onSignIn}
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
    </div>
  );
}

export default SignIn;
