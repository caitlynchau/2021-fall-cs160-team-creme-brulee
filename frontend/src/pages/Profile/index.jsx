import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apis from '../../api';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import PersonIcon from '@material-ui/icons/Person';


function Profile() {
  const [isMounted, setMounted] = useState(false);
  const [posts, setPosts] = useState(null);
  const params = useParams();
  const userProfile = params.username;

  useEffect(() => {
    if (!isMounted) {
      apis.getPostsByUser(userProfile).then(response => {
        setPosts(response.data);  
       })
      setMounted(true);
    }
  }, [isMounted, userProfile]);

  console.log('posts', posts);

  return (
    <div className="profile">
      {posts && posts.success && 
      <>
        <Box className="profile-header">
            <Avatar style={{width: 100, height: 100}}><PersonIcon/></Avatar>
            <Box display="flex" flexDirection="column" pl={4}>
              <Box className="profile-header-username">{userProfile}</Box>                   
              <Box display="flex" flexDirection="row">
                <Box className="profile-header-post-count" pr={3}>{`${posts.data.length} posts`}</Box>
                <Box className="profile-header-follower-count" pr={3}>0 followers</Box>
                <Box className="profile-header-following-count" pr={3}>0 following</Box>
                <Box>
                  <button type="button" className="btn btn-outline-dark btn-sm">Follow</button>
                </Box>
              </Box>
              
            </Box>
        </Box>
        {posts.data.length !== 0 ? 
          <Box className="profile-posts" flexGrow={3}>
            <Grid container spacing={3}>
              {posts.data.slice().reverse().map(post => 
                <Grid key={post._id} item xs={4}>
                  <Box className="profile-post">
                    <img src={post.image} alt={post.caption} />
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>  
        :
          <Box className="profile-posts--error">No posts to display.</Box>
        }
        
        
      </>
      }
     
    </div>
  );
}

export default Profile;