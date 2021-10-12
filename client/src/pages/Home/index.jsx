import React from "react";
import { Box, Button, TextField } from "@material-ui/core";

function Home() {
  return (
    <Box
      className="sign-up"
      component="form"
      noValidate
      autoComplete="off"
      display="flex"
      flexDirection="column"
    >
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Username" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <Button>Sign up</Button>
    </Box>
  );
}

export default Home;
