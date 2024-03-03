"use client";
import Box from "@mui/material/Box";
import { Form, Formik } from "formik";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { app } from "@/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AlertComponent } from "@/app/components/common";
import { Error } from "@mui/icons-material";
import jwt from "jsonwebtoken";
import { customLocalStorage } from "@/app/core/utils";
const FormComponent = ({ children }: { children: ReactNode }) => {
  const auth = getAuth(app);
  // const [data, setData] = useState();
  const [wrongData, setWrongData] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const [hasToken, setHasToken] = useState(false);
  const handleSubmit = (event: any) => {
    console.log(event.email);
    setLoading(true);
    signInWithEmailAndPassword(auth, event.email, event.password)
      .then((response) => {
        responseHandler(response);
      })
      .catch((err) => {
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
    const token = jwt.sign({ uid: user.uid, email: user.email }, "userToken");

    const expireTime = 12 * 60 * 60 * 1000;
    console.log("response.user", response.user);
    console.log("token", token);
    // window.localStorage.setItem("userToken", JSON.stringify(localStorageToken));
    customLocalStorage.setItem("userToken", token, expireTime);
    setLoading(false);
    setIsLogin(true);
    setTimeout(() => {
      setIsLogin(false);
      window.location.pathname = "/";
    }, 2000);
  };

  useEffect(() => {
    customLocalStorage.getWithExpiry("userToken") && setIsLogin(true);
  }, [isLogin]);
  return (
    <Fragment>
      {loading && <AlertComponent status={"info"}>loading...</AlertComponent>}
      {wrongData && (
        <AlertComponent icon={<Error />} status={"error"}>
          Email or Password is Wrong
        </AlertComponent>
      )}
      {isLogin && (
        <AlertComponent status={"success"}>
          Login Account , Redirect To Landing Page
        </AlertComponent>
      )}
      <Box
        component={Formik}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <Box component={Form}>{children}</Box>
      </Box>
    </Fragment>
  );
};

export default FormComponent;
