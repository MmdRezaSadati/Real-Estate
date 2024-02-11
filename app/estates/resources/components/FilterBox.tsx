import { Button } from "@mui/material";
import {
  EstatesForm,
  SearchInput,
  SelectHouseStyle,
  SliderRange,
} from "./resources";

const FilterBox = () => {
  return (
    <>
      <EstatesForm>
        <div className="md:w-3/6 shadow-md w-full rounded-xl overflow-hidden">
          <SearchInput />
        </div>
        <div className="md:w-1/5 w-1/2 rounded-xl px-10">
          <SliderRange />
        </div>
        <div className="md:w-1/5 w-1/2 rounded-xl">
          <SelectHouseStyle />
        </div>
      </EstatesForm>
    </>
  );
};

export default FilterBox;
