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
        <Box
          sx={{
            width: {
              md: 2 / 6,
              lg: 3 / 6,
              xs: "100%",
            },
          }}
          borderRadius={3}
          overflow={"hidden"}
          className="shadow-md"
        >
          <SearchInput />
        </Box>
        <Box
          sx={{
            width: {
              md: 2 / 5,
              lg: 1 / 5,
              xs: "100%",
            },
          }}
          borderRadius={3}
          px={5}
        >
          <SliderRange />
        </Box>
        <Box
          sx={{
            width: {
              md: 1 / 5,
              xs: "100%",
            },
          }}
          borderRadius={3}
        >
          <SelectHouseStyle />
        </Box>
      </EstatesForm>
    </>
  );
};

export default FilterBox;
