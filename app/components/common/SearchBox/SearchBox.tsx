import { Button } from "@mui/material";
import Box from "@mui/material/Box";
const SearchBox = ({
  isHero,
  className,
}: {
  isHero?: Boolean;
  className?: string;
}) => {
  return (
    <Box
      className={`p-2 ${
        isHero ? "bg-slate-300" : "bg-slate-100"
      } w-full rounded-xl ${className ? className : ""}`}
    >
      <Box
        component={"form"}
        className="overflow-hidden relative rounded-lg flex justify-between bg-white"
      >
        <input
          type="text"
          className="focus:outline-0 p-3 w-full text-slate-900"
          placeholder="Address, School, City, Zip or Neighborhood"
        />
        <Button
          type="submit"
          sx={{
            px: { sm: 2.5 },
            top: 0,
            right: 0,
            height: "100%",
            position: "absolute",
            borderRadius: 0,
          }}
          className="!bg-blue-700 hover:!bg-blue-800 !text-white hover:!bg-opacity-90"
        >
          <Box component={"span"} className="font-semibold tracking-[0.25em]">
            SEARCH
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBox;
