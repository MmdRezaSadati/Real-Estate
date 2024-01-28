import { StaticImageData } from "next/image";
import { OfficialType } from "..";

interface ProductType extends OfficialType {
  isPrompt: boolean;
  rooms: number;
  price: number | string;
  status: string;
  landSize: number;
  city: string;
}
export default ProductType;
