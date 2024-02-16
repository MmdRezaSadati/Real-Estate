import CountertopsTwoToneIcon from "@mui/icons-material/CountertopsTwoTone";
import { MainContainer } from "../partials";
import { Product, XTitle } from "../common";
import { ESTATES } from "@/app/core/constants";

const SectionFive = () => {
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
