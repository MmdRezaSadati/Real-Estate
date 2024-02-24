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

const badgeClassNames =
  "flex justify-center p-2 text-base gap-1 text-slate-500 bg-purple-100/80 rounded-xl w-full items-center";
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
          <Box className={badgeClassNames}>
            <AddHomeOutlined fontSize="small" />
            {user?.userEstates}
          </Box>
          <Typography
            variant="body2"
            className="text-slate-400  text-center my-1"
          >
            Estates
          </Typography>
        </Box>
        <Box className="w-1/3">
          <Image
            src={user?.userImage ? user.userImage : ""}
            alt={user?.userName + " profile"}
            className="rounded-xl border-4 w-36 h-40 object-cover border-purple-50 -mt-16 bg-slate-200"
          />
        </Box>
        <Box className="w-1/3">
          <Box className={badgeClassNames}>
            <ReviewsOutlined fontSize="small" />
            {user?.userRate}
          </Box>
          <Typography
            variant="body2"
            className="text-slate-400 text-center my-1"
          >
            User Rate
          </Typography>
        </Box>
      </Box>

      <Box className="my-2 flex justify-center gap-3 items-center">
        <Typography
          variant="h2"
          className="text-2xl text-slate-500 font-semibold"
        >
          {user?.userName}
        </Typography>
        {user?.isVerified && (
          <Verified fontSize="small" className="text-purple-500 mt-[2px]" />
        )}
      </Box>
      <Typography
        variant="caption"
        className="text-lg block text-center text-slate-500"
      >
        Relator
      </Typography>
      <Box className="flex justify-center my-2 px-10 gap-5">
        {ConnectionMapper(user?.linksConnection!)}
      </Box>

      <Box className="flex border rounded-md my-2">
        <Typography
          variant="button"
          className="bg-purple-300/50 rounded-md text-purple-950 opacity-80 px-5 py-3"
        >
          About Me
        </Typography>
      </Box>
      <Typography
        variant="body2"
        className="text-base text-slate-500 py-3 px-5"
      >
        {user?.userAbout}
      </Typography>
      <Typography
        component={"a"}
        href={"mailto:" + user?.emailAddress}
        variant="button"
        className="bg-purple-300/50 cursor-pointer block text-center rounded-md text-purple-950 hover:opacity-100 hover:bg-purple-300/70 opacity-80 px-5 py-3"
      >
        Email To {user?.userName}
      </Typography>
    </Box>
  );
};

export default UserCard;
