import "maplibre-gl/dist/maplibre-gl.css";
import { ESTATES } from "@/app/core/constants";
import {
  BoxComponent,
  GallerySlider,
  MapComponent,
  Save,
  TitleSection,
} from "./resources";
import { MainContainer } from "@/app/components/partials";
import moment from "moment";
import { CopyHere } from "@/app/components/common";
const EstatesDetails = ({ params: { id } }: { params: { id: string } }) => {
  const estate = ESTATES.find((estate) => estate.id === id);

  return (
    <MainContainer className="text-slate-700 bg-slate-200 flex gap-10 py-10">
      {/* EstatesDetails {estate?.estateName} */}
      <div className="w-3/4">
        <TitleSection estate={estate} />
        <BoxComponent>
          <GallerySlider images={estate?.imageSrc} title={estate?.estateName} />
        </BoxComponent>
        <BoxComponent>
          <h3 className="text-2xl pb-2 font-bold">Location in Map</h3>
          <MapComponent estate={estate} />
        </BoxComponent>
      </div>
      <div className="w-1/4"></div>
    </MainContainer>
  );
};

export default EstatesDetails;
