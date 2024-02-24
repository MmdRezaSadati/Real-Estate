import { StaticImageData } from "next/image";

interface ProductItemType {
  id: string;
  imageSrc: StaticImageData | any;
  estateName: string;
  price: number;
  caption: string;
  status: string;
}
export default ProductItemType;
