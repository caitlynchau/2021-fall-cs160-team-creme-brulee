import React from 'react';
import { Box, Paper } from '@material-ui/core';

function Upload() {
  return (
    <Paper>
      
        {/* Email */}
        <div> 
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="name@example.com"/>
        </div>
        {/* Username */}
        <div>
          <label className="form-label">Username</label>
          <input type="text" className="form-control"/>
        </div>
        {/* Password */}
        <label className="form-label">Password</label>
        <input type="password" className="form-control"/>
        <Box mt={2}>
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Submit
          </button>
        </Box>
      
    </Paper>
  )
}

export default Upload;