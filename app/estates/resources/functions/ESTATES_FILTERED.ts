import { ESTATES } from "@/app/core/constants";
import filterEstatesTypes from "../types/filterEstates.type";

const filterEstates = ({
  houseStyle,
  searchParam,
  priceFrom,
  priceTo,
}: filterEstatesTypes) =>
  ESTATES.filter((item) => {
    return (
      item.houseId.includes(houseStyle) &&
      item.estateName.toLowerCase().includes(searchParam.toLowerCase()) &&
      item.price >= priceFrom! &&
      item.price <= priceTo!
    );
  });
export default filterEstates;
