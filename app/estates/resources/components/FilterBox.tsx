import { Button } from "@mui/material";
import Box from "@mui/material/Box";
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
        <Box className="md:w-2/6 lg:w-3/6 shadow-md w-full rounded-xl overflow-hidden">
          <SearchInput />
        </Box>
        <Box className="md:w-2/5 lg:w-1/5 w-full rounded-xl px-10">
          <SliderRange />
        </Box>
        <Box className="md:w-1/5 w-full rounded-xl">
          <SelectHouseStyle />
        </Box>
      </EstatesForm>
    </>
  );
};

export default FilterBox;
