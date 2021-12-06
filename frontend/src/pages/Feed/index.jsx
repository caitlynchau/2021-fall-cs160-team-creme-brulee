import React, { useEffect } from 'react';
import apis from "../../api";
import Box from '@material-ui/core/Box';
import Post from '../../components/Post';
import { useSelector } from 'react-redux';


function Feed() {
  const [isMounted, setIsMounted] = React.useState(false);
  const [posts, setPosts] = React.useState(null);

  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!isMounted) {
      apis.getAllPosts().then(response => {
       setPosts(response.data);  
      })
      setIsMounted(true);
    }
  }, [isMounted, posts])
  
  return (
    <div className="feed">
      {currentUser !== '' &&
        <Box className="feed--username">{`Welcome back, @${currentUser}!`}</Box>
      }
      {posts && posts.success && 
        posts.data.slice().reverse().map(post => 
          <Post key={post._id} postData={post} />
        )
      }
      
    </div>
  )
}

export default Feed;