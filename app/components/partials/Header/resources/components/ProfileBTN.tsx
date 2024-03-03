"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { customLocalStorage } from "@/app/core/utils";
import jwt from "jsonwebtoken";
import { dataBase } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
const ProfileBTN = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser]: any = useState();
  const collectionRef = collection(dataBase, "users");
  useEffect(() => {
    const login = customLocalStorage.getWithExpiry("userToken");
    if (login) {
      const user: any = jwt.decode(login);
      getDocs(collectionRef).then((data) => {
        const dataArr = data.docs.map((doc) => {
          return { ...doc.data() };
        });
        const account = dataArr.find((item) => {
          return item.uid === user.uid;
        });
        setUser(account);
      });
    }
    setIsLogin(login ? true : false);
  }, []);

  return (
    <Fragment>
      {isLogin && user ? (
        <Box
          component={Link}
          href={"/auth/userPanel"}
          display={"flex"}
          alignItems={"center"}
          gap={0.5}
        >
          <AccountCircleOutlined />
          {user.firstName}
        </Box>
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
