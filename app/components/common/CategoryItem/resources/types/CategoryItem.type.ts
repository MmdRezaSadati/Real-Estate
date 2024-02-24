import { StaticImageData } from "next/image";

interface CategoryItemType {
  imageSrc: StaticImageData | string;
  title: string;
  href: string;
}
export default CategoryItemType;
