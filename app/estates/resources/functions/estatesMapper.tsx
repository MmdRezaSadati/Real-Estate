import { Product } from "@/app/components/common";
import { ProductType } from "@/app/components/common/Product/resources";
const mapper = (ESTATES_FILTERED: ProductType[]) =>
  ESTATES_FILTERED.map((item: ProductType, index: number) => (
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
  ));
export default mapper;
