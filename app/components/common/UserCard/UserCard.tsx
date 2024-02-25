import Image from "next/image";
import React from "react";
import AddHomeOutlined from "@mui/icons-material/AddHomeOutlined";
import ReviewsOutlined from "@mui/icons-material/ReviewsOutlined";
import Verified from "@mui/icons-material/Verified";
import Link from "next/link";
import { UserType } from "@/app/core/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ConnectionMapper } from "./resources";
const badgeStyles = {
  display: "flex",
  justifyContent: "center",
  p: 1,
  fontSize: "16px",
  gap: 0.5,
  borderRadius: "12px",
  width: "100%",
  alignItems: "center",
};
const badgeClassNames = "text-slate-500 bg-purple-100/80";
const UserCard = ({
  user,
  isSticky,
}: {
  user: UserType | undefined;
  isSticky: boolean;
}) => {
  return (
    <Box
      className={`bg-purple-50 rounded-xl mb-3 mt-4 top-16 right-0 shadow-md p-1 ${
        isSticky ? "sticky" : ""
      } `}
    >
      <Box className="flex gap-2 justify-between items-center">
        <Box className="w-1/3">
          <Box sx={badgeStyles} className={badgeClassNames}>
            <AddHomeOutlined fontSize="small" />
            {user?.userEstates}
          </Box>
          <Typography
            variant="body2"
            textAlign={"center"}
            my={0.5}
            className="text-slate-400"
          >
            Estates
          </Typography>
        </Box>
        <Box width={1 / 3}>
          <Image
            src={user?.userImage ? user.userImage : ""}
            alt={user?.userName + " profile"}
            className="rounded-xl border-4 w-36 h-40 object-cover border-purple-50 -mt-16 bg-slate-200"
          />
        </Box>
        <Box width={1 / 3}>
          <Box sx={badgeStyles} className={badgeClassNames}>
            <ReviewsOutlined fontSize="small" />
            {user?.userRate}
          </Box>
          <Typography
            variant="body2"
            textAlign={"center"}
            my={0.5}
            className="text-slate-400"
          >
            User Rate
          </Typography>
        </Box>
      </Box>

      <Box
        display={"flex"}
        my={1}
        justifyContent={"center"}
        gap={1.5}
        alignItems={"center"}
      >
        <Typography
          variant="h2"
          fontSize={24}
          fontWeight={600}
          className="text-slate-500"
        >
          {user?.userName}
        </Typography>
        {user?.isVerified && (
          <Verified
            fontSize="small"
            sx={{ mt: "2px" }}
            className="text-purple-500"
          />
        )}
      </Box>
      <Typography
        variant="caption"
        fontSize={18}
        display={"block"}
        textAlign={"center"}
        className="text-slate-500"
      >
        Relator
      </Typography>
      <Box display={"flex"} justifyContent={"center"} my={1} px={5} gap={2.5}>
        {ConnectionMapper(user?.linksConnection!)}
      </Box>

      <Box display={"flex"} border={1} my={1} borderRadius={"6px"}>
        <Typography
          variant="button"
          sx={{ opacity: 0.8, px: 2.5, py: 1.5, borderRadius: "6px" }}
          className="bg-purple-300/50 text-purple-950"
        >
          About Me
        </Typography>
      </Box>
      <Typography
        variant="body2"
        fontSize={16}
        py={1.5}
        px={2.5}
        className="text-slate-500 "
      >
        {user?.userAbout}
      </Typography>
      <Typography
        component={"a"}
        href={"mailto:" + user?.emailAddress}
        variant="button"
        sx={{
          display: "block",
          textAlign: "center",
          opacity: 0.8,
          px: 2.5,
          py: 1.5,
          borderRadius: "6px",
          cursor: "pointer",
        }}
        className="bg-purple-300/50 text-purple-950 hover:opacity-100 hover:bg-purple-300/70"
      >
        Email To {user?.userName}
      </Typography>
    </Box>
  );
};

export default UserCard;
