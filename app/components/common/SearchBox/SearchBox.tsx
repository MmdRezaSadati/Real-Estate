import { Button } from "@mui/material";

const SearchBox = ({ isHero }: { isHero?: Boolean }) => {
  return (
    <div
      className={`p-2 ${
        isHero ? "bg-slate-300" : "bg-slate-100"
      } w-full rounded-xl`}
    >
      <form className="overflow-hidden relative rounded-lg flex justify-between bg-white">
        <input
          type="text"
          className="focus:outline-0 p-3 w-full text-slate-900"
          placeholder="Address, School, City, Zip or Neighborhood"
        />
        <Button
          type="submit"
          className="bg-blue-700 absolute rounded-none px-5 h-full top-0 right-0 hover:bg-blue-800 text-white hover:bg-opacity-90"
        >
          <span className="font-semibold tracking-[0.25em]">SEARCH</span>
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
