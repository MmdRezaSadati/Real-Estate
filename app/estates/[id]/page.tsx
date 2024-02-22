import "maplibre-gl/dist/maplibre-gl.css";
import { ESTATES, USERS } from "@/app/core/constants";
import {
  BoxComponent,
  GallerySlider,
  MapComponent,
  Save,
  TitleSection,
} from "./resources";
import { MainContainer } from "@/app/components/partials";
import moment from "moment";
import { CopyHere, UserCard } from "@/app/components/common";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const EstatesDetails = ({ params: { id } }: { params: { id: string } }) => {
  const estate = ESTATES.find((estate) => estate.id === id);
  const user = USERS.find((user) => user.userId === estate?.userId!);
  return (
    <MainContainer className="text-slate-700 bg-slate-200 flex gap-10 py-10">
      {/* EstatesDetails {estate?.estateName} */}
      <Box className="w-3/5">
        <TitleSection estate={estate} />
        <BoxComponent>
          <GallerySlider images={estate?.imageSrc} title={estate?.estateName} />
        </BoxComponent>
        <BoxComponent>
          <Typography variant="h3" className="text-2xl pb-2 font-bold">
            Location in Map
          </Typography>
          <MapComponent estate={estate} />
        </BoxComponent>
      </Box>
      <Box className="w-2/5">
        <UserCard user={user} />
      </Box>
    </MainContainer>
  );
};

export default EstatesDetails;
