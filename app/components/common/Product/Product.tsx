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
      sx={{
        width: { sm: 400, xs: "100%" },
        textAlign: "left",
        maxWidth: 400,
        position: "relative",
        overflow: "visible",
        minHeight: 384,
        p: 1.5,
        borderRadius: 3,
      }}
      className={`scale-x-90 group shadow-2xl shadow-slate-300 hover:shadow-slate-400
       hover:-translate-y-2 transition-all text-slate-100 bg-white ${
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
      <CardContent sx={{ p: 1.5 }} className="text-slate-800">
        <Box display={"flex"} gap={0.5}>
          <Box
            component={"span"}
            display={"inline-flex"}
            alignItems={"center"}
            borderRadius={1}
            px={1}
            py={0.5}
            fontSize={"12px"}
            fontWeight={500}
            className="bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10"
          >
            for {status}
          </Box>{" "}
          <Box
            component={"span"}
            display={"inline-flex"}
            alignItems={"center"}
            borderRadius={1}
            px={1}
            py={0.5}
            fontSize={"12px"}
            fontWeight={500}
            className="bg-red-50 font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
          >
            {houseStyle}
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Box
            component={"span"}
            display={"flex"}
            alignItems={"center"}
            gap={0.5}
          >
            <StarIcon className="text-yellow-500" /> {rate}
          </Box>
          <Link
            href={"/estates/" + id}
            title={estateName}
            className="text-2xl font-bold"
          >
            {estateName}
          </Link>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: "20px",
            whiteSpace: { sm: "nowrap" },
            fontWeight: 600,
            mt: 0.5,
          }}
        >
          <Box component={"span"} className="text-blue-700">
            {price > 0 ? "$" + SeparationNumberString(price) : "an argument"}
          </Box>
          {price !== 0 && status == "Rent"
            ? " per Month"
            : status == "Buy" && " For Buy"}
          <Box display={""} component={"span"} fontSize={"16px"}>
            {"  "}| {SeparationNumberString(landSize)} SQFT {"  "}
            <Typography
              variant="caption"
              display={"inline-block"}
              fontWeight={700}
            >
              | in {city}
            </Typography>
          </Box>
        </Typography>
        <Typography variant="body2" fontSize={20} fontWeight={700}>
          {rooms} bedrooms
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
