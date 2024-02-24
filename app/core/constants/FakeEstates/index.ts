import House1 from "@/public/images/House1.png";
import House2 from "@/public/images/House2.jpg";
import House3 from "@/public/images/House3.jpg";

const ESTATES = [
  {
    id: "1",
    imageSrc: [House1, House1, House3],
    estateName: "new York apartment",
    view: 1500,
    price: 150000,
    status: "Rent",
    landSize: 80,
    rooms: 2,
    bathrooms: 3,
    guests: 5,
    age: 2,
    isPrompt: false,
    hasParking: false,
    hasWareHouse: true,
    hasElevator: false,
    userId: "1",
    city: "New York",
    caption: "its awesome!",
    houseStyle: "apartment",
    houseId: "1",
    rate: "4.50",
    insertDate: "2023-2-30",
    longitude: 60,
    latitude: 60,
  },
  {
    id: "2",
    imageSrc: [House2, House2, House1, House3, House1, House2],
    estateName: "Villa",
    view: 250,
    price: 250000,
    rooms: 1,
    isPrompt: true,
    hasParking: false,
    hasWareHouse: true,
    hasElevator: false,
    longitude: 53,
    latitude: 36,
    userId: "2",
    age: 10,
    status: "Buy",
    landSize: 130,
    city: "Los Angeles",
    caption: "its best!",
    houseStyle: "villa",
    houseId: "2",
    rate: "4.20",
    bathrooms: 2,
    guests: 3,
    insertDate: "2023-12-30",
  },
  {
    id: "3",
    imageSrc: [House3],
    estateName: "Texas Villa",
    view: 350,
    isPrompt: false,
    hasParking: false,
    hasWareHouse: true,
    hasElevator: false,
    longitude: 70,
    latitude: 70,
    userId: "4",
    age: 5,
    price: 0,
    rooms: 3,
    status: "Rent",
    landSize: 130,
    city: "Texas",
    caption: "its nice!",
    houseStyle: "villa",
    houseId: "2",
    rate: "2.50",
    bathrooms: 1,
    insertDate: "2022-12-30",
    guests: 6,
  },
];
export default ESTATES;