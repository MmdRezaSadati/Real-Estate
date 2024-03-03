"use client";
import { MainContainer } from "@/app/components/partials";
import { customLocalStorage } from "@/app/core/utils";
import { redirect } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { MenuItem, MenuList, Grid } from "@mui/material";
const panelProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hasToken, setHasToken] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    customLocalStorage.getWithExpiry("userToken")
      ? setHasToken(true)
      : setHasToken(false);
  }, []);
  const path = "/auth/userPanel/";
  const PANEL_ROUTES = [
    { name: "Dashboard", href: path + "dashboard" },
    { name: "Account", href: path + "account" },
    { name: "Account", href: path + "account" },
  ];

  return (
    <MainContainer>
      {hasToken ? (
        <Grid
          container
          gap={3}
          minHeight={"100vh"}
          flexWrap={"nowrap"}
          display={"flex"}
        >
          <Grid
            component={MenuList}
            item
            sm={3}
            xs={12}
            display={"flex"}
            flexDirection={"column"}
          >
            <MenuItem></MenuItem>
          </Grid>
          <Grid item sm={9} xs={12} display={"flex"}>
            {children}
          </Grid>
        </Grid>
      ) : (
        redirect("/")
      )}
    </MainContainer>
  );
};

export default panelProvider;
