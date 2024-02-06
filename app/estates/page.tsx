import { Fragment } from "react";
import { Product, SearchInput } from "../components/common";
import { MainContainer } from "../components/partials";

import House1 from "@/public/images/House1.png";
import House2 from "@/public/images/House2.jpg";
import House3 from "@/public/images/House3.jpg";
import { FilterBox } from "./resources";
const Estates = () => {
  const ESTATES = [
    {
      id: "1",
      imageSrc: House1,
      estateName: "Estate name 1",
      view: 150,
      price: 1500,
      rooms: 2,
      status: "Rent",
      landSize: 80,
      isPrompt: false,
      city: "New York",
      caption: "its awesome!",
      houseStyle: "apartment",
      rate: "4.50",
      bathrooms: 3,
      guests: 5,
    },
    {
      id: "2",
      imageSrc: House2,
      estateName: "Estate name 3",
      view: 250,
      price: 2500000,
      rooms: 1,
      isPrompt: true,
      status: "Buy",
      landSize: 130,
      city: "Los Angeles",
      caption: "its best!",
      houseStyle: "villa",
      rate: "4.20",
      bathrooms: 1,
      guests: 3,
    },
    {
      id: "3",
      imageSrc: House3,
      estateName: "Estate name 3",
      view: 350,
      isPrompt: false,
      price: "an agreement",
      rooms: 3,
      status: "Rent",
      landSize: 130,
      city: "Texas",
      caption: "its nice!",
      houseStyle: "villa",
      rate: "2.50",
      bathrooms: 1,
      guests: 6,
    },
  ];
  return (
    <Fragment>
      <MainContainer>
        <FilterBox />
        <div></div>
      </MainContainer>
      <div className="bg-slate-300 px-5 py-8">
        <MainContainer className="flex gap-5 justify-center flex-wrap">
          {ESTATES.map((item, index) => (
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
