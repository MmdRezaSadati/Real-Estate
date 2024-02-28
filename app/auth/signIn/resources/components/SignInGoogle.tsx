"use client";
import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GoogleIcon from "@mui/icons-material/Google";
const SignInGoogle = () => {
  const handleClick = () => {};
  return (
    <Grid>
      <Button
        fullWidth
        onClick={handleClick}
        sx={{ my: 1 }}
        variant="outlined"
        startIcon={<GoogleIcon />}
      >
        Sign In with Google
      </Button>
    </Grid>
  );
};

export default SignInGoogle;
