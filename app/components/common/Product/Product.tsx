import { SeparationNumberString } from "@/app/core/utils";
import { ProductType, Prompt, ViewsCount } from "./resources";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const Product = ({
  imageSrc,
  estateName,
  view,
  id,
  rooms,
  price,
  status,
  landSize,
  city,
  isPrompt,
  rate,
  houseStyle,
}: ProductType) => {
  return (
    <Card
      className={`sm:w-96 text-left !overflow-visible max-w-[400px] w-full relative scale-x-90 min-h-96 group shadow-2xl shadow-slate-300 hover:shadow-slate-400 hover:-translate-y-2 transition-all text-slate-100 bg-white rounded-3xl p-3 group ${
        isPrompt && "border-2 border-sky-950"
      }`}
    >
      {isPrompt && <Prompt />}
      <ViewsCount
        estateName={estateName}
        id={id}
        imageSrc={imageSrc}
        view={view}
      />
      <CardContent className="text-slate-800 p-3">
        <Box className="flex gap-1">
          <Box
            component={"span"}
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
          >
            for {status}
          </Box>{" "}
          <Box
            component={"span"}
            className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
          >
            {houseStyle}
          </Box>
        </Box>
        <Box className="flex items-center gap-2">
          <Box component={"span"} className="flex items-center gap-1">
            <StarIcon className="text-yellow-500" /> {rate}
          </Box>
          <Link href={"/estates/" + id} className="text-2xl font-bold">
            {estateName}
          </Link>
        </Box>
        <Typography
          variant="body2"
          className="text-xl sm:whitespace-nowrap font-semibold mt-1"
        >
          <Box component={"span"} className="text-blue-700">
            {price > 0 ? "$" + SeparationNumberString(price) : "an argument"}
          </Box>
          {price !== 0 && status == "Rent"
            ? " per Month"
            : status == "Buy" && " For Buy"}
          <Box display={""} component={"span"} className="text-base">
            {"  "}| {SeparationNumberString(landSize)} SQFT {"  "}
            <Typography variant="caption" className="inline-block font-bold">
              | in {city}
            </Typography>
          </Box>
        </Typography>
        <Typography variant="body2" className="text-xl font-bold">
          {rooms} bedrooms
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
