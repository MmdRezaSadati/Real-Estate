import { SearchInput } from "@/app/components/common";
import { Button } from "@mui/material";
import { EstatesForm, SelectHouseStyle, SliderRange } from "./resources";

const FilterBox = () => {
  return (
    <>
      <EstatesForm>
        <div className="md:w-2/6 shadow-md w-full rounded-xl overflow-hidden">
          <SearchInput />
        </div>
        <div className="md:w-1/5 w-1/2 rounded-xl px-10">
          <SliderRange />
        </div>
        <div className="md:w-1/5 w-1/2 rounded-xl">
          <SelectHouseStyle />
        </div>
        <div className="md:w-1/5 w-full">
          <Button
            type="submit"
            className="bg-blue-700 h-full rounded px-5 text-center w-full hover:bg-blue-800 text-white"
          >
            Search
          </Button>
        </div>
      </EstatesForm>
    </>
  );
};

export default FilterBox;
