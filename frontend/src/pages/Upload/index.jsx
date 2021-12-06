import axios from 'axios';
import React, { useState, useRef } from "react";
import { Card, Box } from '@material-ui/core';
import apis from "../../api";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState('');
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');

  // const FileUploader = ({onFileSelect}) => {
  //   const fileInput = useRef(null)

  //   const handleFileInput = (e) => {
  //     onFileSelect(e.target.files[0]);
  //     // const file = e.target.files[0];
  //     // if(file.size > 1024)
  //     //   onFileSelectError({error: "File size cannot exceed more than 1MB"});
  //     // else onFileSelectSuccess(file);
  //   }

  //   return (
  //     <div className="fileUploader">
  //       <input type="file" onChange={handleFileInput} id="userpost" accept="image/*"></input>
  //       <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
  //     </div>
  //   )
  // }

  const handleFileUpload = (event) => {
    console.log(event.target.files[0]); // just print out the name
    setSelectedFile(event.target.files[0]);
  }

  const createPost = async () => {
    const payload = { location, caption, tags, selectedFile };
    await apis.createPost(payload).then(res => {
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