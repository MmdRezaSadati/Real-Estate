"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
const ProfileBTN = () => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    const login = localStorage.getItem("userToken");
    setIsLogin(login ? true : false);
  }, []);

  return (
    <Fragment>
      {isLogin ? (
        <div></div>
        ) : (
        <Button
          color="info"
          variant="contained"
          component={Link}
          href={"/auth/signIn"}
          sx={{
            letterSpacing: "0.35em",
            scale: { md: 1, sm: 0.75 },
          }}
        >
          Sign In
        </Button>
      )}
    </Fragment>
  );
};

export default ProfileBTN;
