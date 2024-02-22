import { StaticImageData } from "next/image";

interface OfficialType {
  id: string;
  imageSrc: StaticImageData[] | string[];
  estateName: string;
  view: number;
}
export default OfficialType;
