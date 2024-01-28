import { StaticImageData } from "next/image";

interface ProductItemType {
  id: string;
  imageSrc: StaticImageData;
  estateName: string;
  price: string | number;
  caption: string;
  status: string;
}
export default ProductItemType;
