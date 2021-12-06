import React, { useEffect } from 'react';
import apis from "../../api";
import Post from '../../components/Post';


function Feed() {
  const [isMounted, setIsMounted] = React.useState(false);
  const [posts, setPosts] = React.useState(null);

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
      {posts && posts.success && 
        posts.data.map(post => 
          <Post postData={post} />
        )
      }
      
    </div>
  )
}

export default Feed;