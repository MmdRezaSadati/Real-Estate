import { Fragment } from "react";
import { Product, SearchInput } from "../components/common";
import { MainContainer } from "../components/partials";

import House1 from "@/public/images/House1.png";
import House2 from "@/public/images/House2.jpg";
import House3 from "@/public/images/House3.jpg";
import { FilterBox, SearchParamsType } from "./resources";

const ESTATES = [
  {
    id: "1",
    imageSrc: House1,
    estateName: "new York apartment",
    view: 150,
    price: 150000,
    rooms: 2,
    status: "Rent",
    landSize: 80,
    isPrompt: false,
    city: "New York",
    caption: "its awesome!",
    houseStyle: "apartment",
    houseId: "1",
    rate: "4.50",
    bathrooms: 3,
    guests: 5,
  },
  {
    id: "2",
    imageSrc: House2,
    estateName: "Villa",
    view: 250,
    price: 250000,
    rooms: 1,
    isPrompt: true,
    status: "Buy",
    landSize: 130,
    city: "Los Angeles",
    caption: "its best!",
    houseStyle: "villa",
    houseId: "2",
    rate: "4.20",
    bathrooms: 1,
    guests: 3,
  },
  {
    id: "3",
    imageSrc: House3,
    estateName: "Texas Villa",
    view: 350,
    isPrompt: false,
    price: 0,
    rooms: 3,
    status: "Rent",
    landSize: 130,
    city: "Texas",
    caption: "its nice!",
    houseStyle: "villa",
    houseId: "3",
    rate: "2.50",
    bathrooms: 1,
    guests: 6,
  },
];

const Estates = ({ searchParams }: { searchParams: SearchParamsType }) => {
  const houseStyle = searchParams.houseStyle ? searchParams.houseStyle : "";
  const searchParam = searchParams.searchParams
    ? searchParams.searchParams
    : "";
  const priceFrom = searchParams.priceFrom
    ? parseInt(searchParams.priceFrom)
    : 0;
  const priceTo = searchParams.priceTo
    ? parseInt(searchParams.priceTo)
    : 5000000;
  console.log(searchParams.searchParams);
  const ESTATES_FILTERED = ESTATES.filter((item) => {
    return (
      item.houseId.includes(houseStyle) &&
      item.estateName.toLowerCase().includes(searchParam.toLowerCase()) &&
      item.price >= priceFrom! &&
      item.price <= priceTo!
    );
  });
  console.log(ESTATES_FILTERED);
  return (
    <Fragment>
      <MainContainer>
        <FilterBox />
      </MainContainer>
      <div className="bg-corbeau-500 bg-opacity-10  px-5 py-8">
        <MainContainer className="flex gap-5 justify-center flex-wrap">
          {ESTATES_FILTERED.map((item, index) => (
            <Product
              key={index}
              isPrompt={item.isPrompt}
              rooms={item.rooms}
              price={item.price}
              status={item.status}
              landSize={item.landSize}
              city={item.city}
              id={item.id}
              houseStyle={item.houseStyle}
              imageSrc={item.imageSrc}
              rate={item.rate}
              estateName={item.estateName}
              view={item.view}
            />
          ))}
        </MainContainer>
      </div>
    </Fragment>
  );
};

export default Estates;
