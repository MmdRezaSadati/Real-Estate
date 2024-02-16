import { Fragment } from "react";
import { Product } from "../components/common";
import { MainContainer } from "../components/partials";

import {
  filterEstates,
  FilterBox,
  SearchParamsType,
  estateMapper,
} from "./resources";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";

const Estates = ({ searchParams }: { searchParams: SearchParamsType }) => {
  const houseStyle = searchParams.houseStyle ? searchParams.houseStyle : "";
  const searchParam = searchParams.searchParams
    ? searchParams.searchParams
    : "";
  const priceFrom = searchParams.priceFrom
    ? parseInt(searchParams.priceFrom)
    : 0;
  const priceTo = searchParams.priceTo
    ? parseInt(searchParams.priceTo)
    : 5000000;
  const ESTATES_FILTERED = filterEstates({
    houseStyle: houseStyle,
    searchParam: searchParam,
    priceFrom: priceFrom,
    priceTo: priceTo,
  });

  return (
    <Fragment>
      <MainContainer>
        <FilterBox />
      </MainContainer>
      <div className="bg-corbeau-500 overflow-hidden relative bg-opacity-10  px-5 py-9">
        <HomeWorkOutlinedIcon
          className="absolute w-[550px] h-[550px] z-0 -top-20 text-slate-400 -left-5 opacity-10 "
          color="disabled"
        />
        <MainContainer className="flex gap-5 justify-center flex-wrap">
          {estateMapper(ESTATES_FILTERED)}
        </MainContainer>
      </div>
    </Fragment>
  );
};

export default Estates;
