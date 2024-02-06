import { MainContainer } from "../partials";
import { BigImage, SuperSale, XTitle } from "../common";
import ImageSrc from "@/public/images/House2.jpg";
import ImageSrc2 from "@/public/images/House3.jpg";
import ImageSrc3 from "@/public/images/House1.png";
import CategoryItem from "../common/CategoryItem/CategoryItem";
const CategoriesSection = () => {
  const CATEGORIES = [
    {
      imageSrc: ImageSrc,
      title: "Rent A Home",
      href: "#",
    },
    {
      imageSrc: ImageSrc2,
      title: "Sell A Home",
      href: "#",
    },
    {
      imageSrc: ImageSrc3,
      title: "Buy A Home",
      href: "#",
    },
  ];
  const dataMapper = CATEGORIES.map((item, index) => (
    <CategoryItem
      ImageSrc={item.imageSrc}
      href={item.href}
      key={item.title + " CategoryItem " + index}
      title={item.title}
    />
  ));
  return (
    <div className="w-full">
      <MainContainer className="flex pt-14 px-28 justify-center gap-10">
        <div className="w-1/3 min-w-[400px] pt-5">
          <div className="relative group min-w-[300px] z-10 -mb-16">
            <SuperSale
              rounded="rounded-t-full"
              padding="px-5 py-6"
              className="absolute -top-2 -right-5 w-36 h-40"
            >
              Super Sale$
            </SuperSale>
            <BigImage
              shadow="big-image-shadow2"
              src={ImageSrc}
              alt={"home 2"}
              width={"w-[400px]"}
              height={"h-[550px]"}
            />
          </div>
        </div>
        <div className="w-2/3 pt-14 flex flex-col justify-center items-center gap-10 px-5">
          <XTitle
            weight="font-extrabold"
            size="text-5xl"
            color="text-slate-900"
            important={"Next Door"}
          >
            Sell For More Than The Home{" "}
          </XTitle>
          <p className="text-base font-semibold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit rerum at vel veritatis libero consectetur soluta explicabo
            optio repellendus aspernatur, quidem ut quo illum alias impedit
            iste. Ullam, provident.
          </p>
          <div className="flex gap-3">{dataMapper}</div>
        </div>
      </MainContainer>
    </div>
  );
};

export default CategoriesSection;
