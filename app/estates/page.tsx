import { Fragment } from "react";
import { Product } from "../components/common";
import { MainContainer } from "../components/partials";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { filterEstates, FilterBox, SearchParamsType } from "./resources";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { estateMapper } from "../core/utils";

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
      <Box
        overflow={"hidden"}
        position={"relative"}
        px={2.5}
        py={5}
        className="bg-corbeau-500 bg-opacity-10"
      >
        <HomeWorkOutlinedIcon
          sx={{
            position: "absolute",
            width: 550,
            height: 550,
            zIndex: 0,
            top: -80,
            left: -20,
            opacity: 0.1,
          }}
          className="text-slate-400 "
          color="disabled"
        />
        <MainContainer
          sx={{
            display: "flex",
            gap: 2.5,
            justifyContent: "center",
            flexWrap: { lg: "nowrap", xs: "wrap" },
          }}
        >
          {estateMapper(ESTATES_FILTERED)}
        </MainContainer>
      </Box>
    </Fragment>
  );
};

export default Estates;
