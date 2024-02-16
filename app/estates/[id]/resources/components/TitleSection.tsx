import React, { Fragment } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { CopyHere } from "@/app/components/common";
import Save from "./Save";
import moment from "moment";
import { BoxComponent } from "..";
const TitleSection = ({ estate }: { estate :any}) => {
  let currentDate = moment(estate?.insertDate).format("Do MMMM");
  return (
    <BoxComponent>
      <div className="flex justify-between text-slate-600 items-center">
        <div className="flex gap-3">
          <AccessTimeIcon />
          <time dateTime={currentDate}>{currentDate}</time>
        </div>
        <div className="flex gap-10">
          <CopyHere className="flex gap-2" siteURL={process.env.SITE_URL!}>
            <ShareOutlinedIcon className="text-xl" />
            <span className="text-sm">Share Estate</span>
          </CopyHere>
          <Save />
        </div>
      </div>
      <div className="text-slate-400 py-2 px-1">
        {estate?.status + " " + estate?.houseStyle + " , " + estate?.city}
      </div>
      <h2 className="text-slate-800 font-bold text-3xl">
        {estate?.estateName}
      </h2>
    </BoxComponent>
  );
};

export default TitleSection;
