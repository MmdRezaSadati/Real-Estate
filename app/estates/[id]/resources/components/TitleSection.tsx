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
  return (
    <BoxComponent>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className="text-slate-600"
      >
        <Box display={"flex"} gap={1.5}>
          <AccessTimeIcon />
          <time dateTime={currentDate}>{currentDate}</time>
        </Box>
        <Box display={"flex"} gap={5}>
          <CopyHere className="flex gap-2" siteURL={process.env.SITE_URL!}>
            <ShareOutlinedIcon sx={{ fontSize: "20px" }} />
            <Box
              component={"span"}
              sx={{ display: { sm: "inline-block", xs: "none" } }}
              fontSize={14}
            >
              Share Estate
            </Box>
          </CopyHere>
          <Save />
        </Box>
      </Box>
      <Box px={0.5} py={1} className="text-slate-400">
        {estate?.status + " " + estate?.houseStyle + " , " + estate?.city}
      </Box>
      <Typography
        variant="h2"
        fontSize={30}
        fontWeight={700}
        className="text-slate-800"
      >
        {estate?.estateName}
      </Typography>
    </BoxComponent>
  );
};

export default TitleSection;
