import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { CopyHere } from "@/app/components/common";
import Save from "./Save";
import moment from "moment";
import { BoxComponent } from "..";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ProductType } from "@/app/core/types";
const TitleSection = ({ estate }: { estate: ProductType | undefined }) => {
  let currentDate = moment(estate?.insertDate).format("Do MMMM");
  console.log('complete');
  return (
    <BoxComponent>
      <Box className="flex justify-between text-slate-600 items-center">
        <Box className="flex gap-3">
          <AccessTimeIcon />
          <time dateTime={currentDate}>{currentDate}</time>
        </Box>
        <Box className="flex gap-10">
          <CopyHere className="flex gap-2" siteURL={process.env.SITE_URL!}>
            <ShareOutlinedIcon className="text-xl" />
            <Box component={"span"} className="text-sm hidden sm:inline-block">
              Share Estate
            </Box>
          </CopyHere>
          <Save />
        </Box>
      </Box>
      <Box className="text-slate-400 py-2 px-1">
        {estate?.status + " " + estate?.houseStyle + " , " + estate?.city}
      </Box>
      <Typography variant="h2" className="text-slate-800 font-bold text-3xl">
        {estate?.estateName}
      </Typography>
    </BoxComponent>
  );
};

export default TitleSection;
