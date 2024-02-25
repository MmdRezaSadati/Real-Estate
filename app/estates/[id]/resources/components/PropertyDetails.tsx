import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ProductType } from "@/app/core/types";
import PriceTitle from "./PriceTitle";
import { Fragment } from "react";
import DetailItem from "./detailItem";

const PropertyDetails = ({ estate }: { estate: ProductType | undefined }) => {
  const PROPERTY_DETAIL_STRING = [
    { item: estate?.landSize.toString() + "SQFT", children: "building size" },
    { item: estate?.rooms.toString(), children: "Rooms" },
    { item: estate?.age.toString() + " years", children: "Age" },
    { item: estate?.bathrooms.toString(), children: "Bathrooms" },
  ];
  const PROPERTY_DETAIL_BOOL = [
    { item: estate?.hasParking, children: "Parking" },
    { item: estate?.hasElevator, children: "Elevator" },
    { item: estate?.hasWareHouse, children: "Ware House" },
  ];

  const detailsMapper = (
    ARR: {
      item: boolean | string | undefined;
      children: string;
    }[]
  ) =>
    ARR.map((prop, index) => (
      <DetailItem
        key={`${prop.children} ${prop.item} ${index} Detail Item`}
        item={prop.item}
      >
        {prop.children}
      </DetailItem>
    ));
  return (
    <Box
      display={"flex"}
      sx={{ flexDirection: { sm: "row", xs: "column" } }}
      gap={5}
      justifyContent={"space-between"}
    >
      <Box sx={{ width: { sm: 3 / 4, xs: "100%" } }}>
        <Typography
          variant="h4"
          fontWeight={700}
          fontSize={24}
          className="text-slate-800"
        >
          Property Details
        </Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          my={2}
          className="gap-y-2"
          mx={1}
          gap={1}
        >
          {detailsMapper(PROPERTY_DETAIL_STRING)}
          <Box display={"flex"} className="sm:flex-nowrap flex-wrap" gap={1}>
            {detailsMapper(PROPERTY_DETAIL_BOOL)}
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={700} mb={1}>
            Caption{" "}
          </Typography>
          <Typography variant="body2">{estate?.caption}</Typography>
        </Box>
      </Box>

      <Box sx={{ width: { sm: 1 / 4, xs: "100%" } }} whiteSpace={"nowrap"}>
        {estate?.price !== 0 ? (
          <Fragment>
            <PriceTitle price={estate?.price}>Price :</PriceTitle>
            <PriceTitle price={estate?.price! / estate?.landSize!}>
              Price Per a SQFT:
            </PriceTitle>
          </Fragment>
        ) : (
          <Typography
            variant="caption"
            className="text-slate-800 font-bold text-lg -ml-5."
          >
            an argument Estate
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default PropertyDetails;
