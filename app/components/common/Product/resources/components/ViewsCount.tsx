import React from "react";
import { OfficialType } from "..";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SeparationNumber } from "@/app/core/utils";
import GroupIcon from "@mui/icons-material/Group";

const ViewsCount = ({ estateName, imageSrc, id, view }: OfficialType) => {
  return (
    <div className="relative w-full h-52 rounded-2xl overflow-hidden">
      <Image src={imageSrc} className="object-cover h-full" alt={estateName} />
      <div className="w-full flex h-10 rounded-t-3xl items-center justify-between py-1 px-5 absolute blur-section transition-all -bottom-10 group-hover:-bottom-0 left-0 z-10">
        <span className="text-slate-900 text-base font-bold">
          <GroupIcon /> {SeparationNumber(view)} People Visited
        </span>
        <Button
          LinkCmponent={Link}
          href={"/estates/" + id}
          className="bg-blue-700 rounded-full px-5 h-full top-0 right-0 hover:bg-blue-800 text-white hover:bg-opacity-90"
        >
          Visit
        </Button>
      </div>
    </div>
  );
};

export default ViewsCount;
