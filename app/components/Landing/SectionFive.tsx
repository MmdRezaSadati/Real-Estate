import CountertopsTwoToneIcon from "@mui/icons-material/CountertopsTwoTone";
import { MainContainer } from "../partials";
import { Product, XTitle } from "../common";
import House1 from "@/public/images/House1.png";
import House2 from "@/public/images/House2.jpg";
import House3 from "@/public/images/House3.jpg";

const SectionFive = () => {
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
    <div className="w-full pb-16 pt-24 mt-28 overflow-hidden relative z-10 bg-blue-100 bg-opacity-50">
      <MainContainer>
        <CountertopsTwoToneIcon
          className="absolute w-[550px] h-[550px] z-0 -top-20 -left-5 opacity-10 "
          color="disabled"
        />
        <div>
          <XTitle
            size={"text-4xl"}
            color="text-slate-900"
            weight={"font-extrabold"}
            important={"Step"}
          >
            Take The First{" "}
          </XTitle>
          <p className="text-base my-3 font-semibold text-gray-400">
            Select Your Goal And Well Guide You On Your Journey
          </p>
          <div className="flex w-full mt-20 justify-center gap-5">
            {ESTATES.map((item, index) => (
              <Product
                key={index}
                price={item.price}
                rooms={item.rooms}
                status={item.status}
                isPrompt={item.isPrompt}
                landSize={item.landSize}
                city={item.city}
                imageSrc={item.imageSrc}
                estateName={item.estateName}
                view={item.view}
                id={item.id}
                rate={item.rate}
                houseStyle={item.houseStyle}
              />
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default SectionFive;
