import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apis from "../../api";


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
    <div>hi</div>
  );
}

export default Profile;