import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Box } from '@material-ui/core';
import apis from "../../api";
import { useSelector } from 'react-redux';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState('');
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');
  const [itinerary, setItinerary] = useState('');
  
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const history = useHistory();
  const goToFeed = useCallback(() => {
    history.push('/feed');
  }, [history]);

  const createPost = async () => {
    const formData = new FormData();
    formData.append('location', location);
    formData.append('tags', tags);
    formData.append('caption', caption);
    formData.append('image', selectedFile);
    formData.append('itinerary', itinerary)
    formData.append('username', currentUser);
    await apis.createPost(formData).then(res => {
      window.alert('Post Created! ' + res.status);
      goToFeed();
    })
  }
  
  return (
    <>
      <div className="upload">
        <Card className="upload-card"> 
            <Box className="card-form">
              <h1>Create a Post</h1>
               <div>
                 <label className="form-label">Choose a Photo</label>
                  <input type="file" id="user-post" accept="image/*" onChange={handleFileUpload} />
              </div>
              {/* Location */}
              <div> 
                <label className="form-label">Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" placeholder="San Jose, CA"/>
              </div>
              {/* Caption */}
              <div>
                <label className="form-label">Caption</label>
                <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} className="form-control" placeholder="Tech Museum in DTSJ"/>
              </div>
              {/* Tags */}
              <label className="form-label">Tags</label>
              <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} className="form-control" placeholder="#museum"/>
              {/* Itinerary */}
              <label className="form-label">Itinerary</label>
              <textarea value={itinerary} onChange={(e) => setItinerary(e.target.value)} className="form-control" rows="4"/>
              
              
              <Box mt={2}>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={createPost}
                >
                  Post
                </button>
              </Box>
            </Box>
        </Card>
      </div>
    </>
  )
}

export default Upload;