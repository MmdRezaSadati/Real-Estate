"use client";
import { app } from "@/firebaseConfig";
import { Error, Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { Fragment, useState } from "react";
import AlertComponent from "../Alert/AlertComponent";
import jwt from "jsonwebtoken";
const GoogleSignIn = () => {
  const [wrongData, setWrongData] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const handleClick = () => {
    console.log("clicked");
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        responseHandler(response);
      })
      .catch((err) => {
        console.log(err);
        catchHandler();
      });
  };
  const catchHandler = () => {
    setWrongData(true);
    setTimeout(() => {
      setWrongData(false);
    }, 2000);
    setLoading(false);
  };
  const responseHandler = (response: any) => {
    const user = response.user;
    const token = jwt.sign({ uid: user.uid, email: user.email }, "userToken", {
      expiresIn: "24h",
    });
    console.log("response.user", response.user);
    console.log("token", token);
    localStorage.setItem("userToken", token);
    setLoading(false);
    setIsLogin(true);
    setTimeout(() => {
      setIsLogin(false);
      window.location.pathname = "/";
    }, 2000);
  };
  return (
    <Fragment>
      {loading && <AlertComponent status={"info"}>loading...</AlertComponent>}
      {wrongData && (
        <AlertComponent icon={<Error />} status={"error"}>
          Something wrong!
        </AlertComponent>
      )}
      {isLogin && (
        <AlertComponent status={"success"}>
          Login Account , Redirect To Landing Page
        </AlertComponent>
      )}
      <Button
        fullWidth
        sx={{ my: 1 }}
        onClick={handleClick}
        variant="outlined"
        startIcon={<Google />}
      >
        Sign In with Google
      </Button>
    </Fragment>
  );
};

export default GoogleSignIn;
