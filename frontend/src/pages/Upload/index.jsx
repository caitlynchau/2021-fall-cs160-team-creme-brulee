import React, { useState } from "react";
import { Card, Box, Paper } from '@material-ui/core';
import apis from "../../api";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState(null);
  const [caption, setCaption] = useState(null);
  const [tags, setTags] = useState(null);

  const createPost = async () => {
    const payload = { location, caption, tags }
    await apis.createPost(payload).then(res => {
      window.alert('Post Created! ' + res.status)
      console.log(res.data);
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
                 <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}/>
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