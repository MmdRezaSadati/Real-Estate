import { StaticImageData } from "next/image";

interface UserType {
  userId: string;
  userName: string;
  userEstates: number;
  userRate: number;
  userImage: StaticImageData;
  isVerified: boolean;
  userAbout: string;
  linksConnection: { link: string; type: string }[];
}
export default UserType;
