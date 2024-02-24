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
  hasParking: boolean;
  hasWareHouse: boolean;
  hasElevator: boolean;
  longitude: number;
  latitude: number;
  userId: string;
  age: number;
  caption: string;
  houseId: string;
  bathrooms: number;
  guests: number;
  insertDate: string;
}
export default ProductType;
