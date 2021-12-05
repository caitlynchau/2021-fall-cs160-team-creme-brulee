import React, { useState } from "react";
import { Card, Box } from '@material-ui/core';
import apis from "../../api";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState('');
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');

  const handleFileUpload = (event) => {
    console.log(event.target.files[0]); // just print out the name
    setSelectedFile(event.target.files[0]);
  }

  const createPost = async () => {
    const formData = new FormData();
    formData.append('location', location);
    formData.append('tags', tags);
    formData.append('caption', caption);
    formData.append('image', selectedFile);
    await apis.createPost(formData).then(res => {
      window.alert('Post Created! ' + res.status);
    })
  }
  
  return (
    <>
      <div className="home">
        <Card className="home-card"> 
            <Box className="card-form">
              <h1>Create a Post</h1>
               <div>
                 <label className="form-label">Choose a Photo</label>
                  <input type="file" id="user-post" accept="image/*" onChange={handleFileUpload} />
              </div>
               {/* Location */}
               <div> 
                 <label className="form-label">Location</label>
                 <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control"/>
               </div>
               {/* Caption */}
               <div>
                 <label className="form-label">Caption</label>
                 <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} className="form-control"/>
               </div>
               {/* Tags */}
               <label className="form-label">Tags</label>
               <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} className="form-control"/>
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