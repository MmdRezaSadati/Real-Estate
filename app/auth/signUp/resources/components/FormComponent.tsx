"use client";
import Box from "@mui/material/Box";
import { Form, Formik } from "formik";
import { Fragment, ReactNode, useState } from "react";
import { app, dataBase } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { AlertComponent } from "@/app/components/common";
import { Error } from "@mui/icons-material";
import { addDoc, collection } from "firebase/firestore";
const FormComponent = ({ children }: { children: ReactNode }) => {
  //  section for firebase variables
  const auth = getAuth(app);
  const collectionRef = collection(dataBase, "users");
  //  section for use state
  const [data, setData] = useState();
  const [alreadyUsedEmail, setAlreadyUsedEmail] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event: any) => {
    setData(event);
    console.log(event.email);
    setLoading(true);
    createUserWithEmailAndPassword(auth, event.email, event.password)
      .then(() => {
        addToDatabase(event);
      })
      .catch(() => {
        catchHandler();
      });
  };
  const catchHandler = () => {
    setAlreadyUsedEmail(true);
    setTimeout(() => {
      setAlreadyUsedEmail(false);
    }, 2000);
    setLoading(false);
  };
  const responseHandler = () => {
    setLoading(false);
    setIsCreated(true);
    setTimeout(() => {
      setIsCreated(false);
      window.location.pathname = "/auth/signIn";
    }, 2000);
  };
  const addToDatabase = (event: any) => {
    addDoc(collectionRef, {
      email: event.email,
      password: event.password,
      firstName: event.firstName,
      lastName: event.lastName,
    })
      .then(() => {
        responseHandler();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Fragment>
      {alreadyUsedEmail && (
        <AlertComponent icon={<Error />} status={"error"}>
          this email is already used
        </AlertComponent>
      )}
      {loading && <AlertComponent status={"info"}>loading...</AlertComponent>}
      {isCreated && (
        <AlertComponent status={"success"}>
          Created Account , Redirect To Sig In Page
        </AlertComponent>
      )}
      <Box
        component={Formik}
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
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
