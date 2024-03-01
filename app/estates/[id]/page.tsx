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
import { Metadata } from "next";
export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const id = params.id;
  const estate = ESTATES.find((estate) => estate.id === id);
  return {
    title: estate?.estateName + " - Estata Bode",
    description: estate?.caption, 
  };
};
const EstatesDetails = ({ params: { id } }: { params: { id: string } }) => {
  const estate = ESTATES.find((estate) => estate.id === id);
  const user = USERS.find((user) => user.userId === estate?.userId!);
  return (
    <MainContainer
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        gap: 5,
        py: 7,
      }}
      className="text-slate-700 bg-slate-200"
    >
      {/* EstatesDetails {estate?.estateName} */}
      <Box className={user ? "lg:w-3/5 w-full" : "w-full"}>
        <TitleSection estate={estate} />
        <GallerySlider images={estate?.imageSrc} title={estate?.estateName} />
        <BoxComponent>
          <PropertyDetails estate={estate} />
        </BoxComponent>
        <BoxComponent>
          <MapComponent estate={estate} />
        </BoxComponent>
      </Box>
      {user && (
        <Box position={"relative"} sx={{ width: { lg: 2 / 5, xs: "100%" } }}>
          <UserCard user={user} isSticky={true} />
        </Box>
      )}
    </MainContainer>
  );
};

export default EstatesDetails;
