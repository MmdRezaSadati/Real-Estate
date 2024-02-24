import { ESTATES, USERS } from "@/app/core/constants";
import {
  BoxComponent,
  GallerySlider,
  MapComponent,
  PropertyDetails,
  TitleSection,
} from "./resources";
import { MainContainer } from "@/app/components/partials";
import { UserCard } from "@/app/components/common";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const EstatesDetails = ({ params: { id } }: { params: { id: string } }) => {
  const estate = ESTATES.find((estate) => estate.id === id);
  const user = USERS.find((user) => user.userId === estate?.userId!);
  return (
    <MainContainer className="text-slate-700 relative bg-slate-200 flex lg:flex-row flex-col gap-10 py-14">
      {/* EstatesDetails {estate?.estateName} */}
      <Box className={user ? "lg:w-3/5 w-full" : "w-full"}>
        <TitleSection estate={estate} />
        <GallerySlider images={estate?.imageSrc} title={estate?.estateName} />
        <BoxComponent>
          <PropertyDetails estate={estate} />
        </BoxComponent>
        <BoxComponent>
          <Typography variant="h3" className="text-2xl pb-2 font-bold">
            Location in Map
          </Typography>
          <MapComponent estate={estate} />
        </BoxComponent>
      </Box>
      {user && (
        <Box position={"relative"} className="lg:w-2/5 w-full">
          <UserCard user={user} isSticky={true} />
        </Box>
      )}
    </MainContainer>
  );
};

export default EstatesDetails;
