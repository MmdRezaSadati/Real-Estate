import { StaticImageData } from "next/image";
import { OfficialType } from "..";

interface ProductType extends OfficialType {
  isPrompt: boolean;
  rooms: number;
  price: number;
  status: string;
  landSize: number;
  city: string;
  rate: string;
  houseStyle: string;
}
export default ProductType;
