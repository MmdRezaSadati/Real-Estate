import * as React from "react";
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
import Link from "next/link";
import { FormComponent } from "./resources";
import { Field } from "formik";
import { PageLayout } from "@/app/components/partials";
const SignIn = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <PageLayout>
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
          <Typography sx={{ color: "#222" }} my={1} component="h1" variant="h5">
            Sign in
          </Typography>
          <FormComponent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FieldInput name="email" label="Email Address" />
              </Grid>
              <Grid item xs={12}>
                <FieldInput name="password" />
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                sx={{ color: "#222", ml: 1 }}
                label="Remember me"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              className="!bg-blue-500 hover:!bg-blue-700"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <MUILink component={Link} href="#" variant="body2">
                  Forgot password?
                </MUILink>
              </Grid>
              <Grid item>
                <MUILink component={Link} href="/auth/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </MUILink>
              </Grid>
            </Grid>
            <GoogleSignIn />
          </FormComponent>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </PageLayout>
  );
};
export default SignIn;
