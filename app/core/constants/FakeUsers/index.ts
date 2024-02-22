import people01 from "@/public/images/users/people01.png";
import people03 from "@/public/images/users/people03.jpg";

const FAKE_USERS = [
  {
    userId: "1",
    userName: "John Smith",
    userEstates: 2,
    userRate: 4.2,
    userImage: people01,
    isVerified: false,
    userAbout: "hi i am john",
    linksConnection: [
      { link: "https://youtube.com/johnsmith", type: "youtube" },
      { link: "https://instagram.com/johnsmith", type: "instagram" },
      { link: "https://twitter.com/johnsmith", type: "twitter" },
      { link: "https://linkedin.com/in/johnsmith", type: "linkedin" },
      { link: "https://t.me/johnsmith", type: "telegram" },
    ],
  },
  {
    userId: "2",
    userName: "Melissa Taylor",
    userEstates: 5,
    userRate: 2,
    userImage: people03,
    isVerified: true,
    userAbout: "hi i am Melissa",
    linksConnection: [
      { link: "https://youtube.com/Melissa", type: "youtube" },
      { link: "https://instagram.com/Melissa", type: "instagram" },
      { link: "https://twitter.com/Melissa", type: "twitter" },
      { link: "https://linkedin.com/in/Melissa", type: "linkedin" },
      { link: "https://t.me/Melissa", type: "telegram" },
    ],
  },
];
export default FAKE_USERS;
