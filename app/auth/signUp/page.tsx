import * as React from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MUILink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Copyright, FieldInput, GoogleSignIn } from "@/app/components/common";
import { FormComponent } from "./resources";
import GoogleIcon from "@mui/icons-material/Google";
// TODO remove, this demo shouldn't need to reset the theme.

const SignUp = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" my={1} sx={{ color: "#222" }} variant="h5">
          Sign up
        </Typography>
        <FormComponent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FieldInput name="firstName" label="First Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FieldInput name="lastName" label="Lst Name" />
            </Grid>
            <Grid item xs={12}>
              <FieldInput name="email" label="Email Address" />
            </Grid>
            <Grid item xs={12}>
              <FieldInput name="password" label="Password" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                sx={{ color: "#222" }}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            className="!bg-blue-500 hover:!bg-blue-700"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <MUILink component={Link} href="/auth/signIn" variant="body2">
                Already have an account? Sign in
              </MUILink>
            </Grid>
          </Grid>
          <Grid>
            <GoogleSignIn />
          </Grid>
        </FormComponent>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
};
export default SignUp;
