import { Article } from "../components/common";
import { MainContainer } from "../components/partials";

import image1 from "@/public/images/blogs/GettyImages-1602560231.webp";
import image2 from "@/public/images/blogs/GettyImages-1481295318.webp";
import image3 from "@/public/images/blogs/Willoughby-granny-flat.webp";
import { Button } from "@mui/material";
const POSTS = [
  {
    title: "Planning rules blamed for boosting property prices as much as 40%",
    id: "1",
    category: {
      name: "estate",
      href: "#",
    },
    description:
      "Research by the Centre for Independent Studies (CIS), released Thursday, estimates planning restrictions have added more than 40% to house prices in Sydney and Melbourne, and almost 30% in Brisbane.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: image1,
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      id: "1",
      imageUrl: "",
    },
  },
  {
    title: "Why improving rental affordability doesn't mean you'll find a home",
    id: "2",
    category: { name: "Video", href: "#" },
    description:
      "Rental affordability has improved in some Australian suburbs, but it doesn't mean property seekers will be able to find a rental.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: image2,
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      id: "#",
      imageUrl: "",
    },
  },
  {
    title:
      "Mystery vendor lists mansion on one of Melbourne’s most-expensive streets",
    id: "3",
    category: { name: "Case Study", href: "#" },
    description:
      "A mystery millionaire is selling his palatial palace on one of Melbourne’s most-expensive streets.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: image3,
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      id: "3",
      imageUrl: "",
    },
  },
];
const Blogs = () => {
  return (
    <MainContainer>
      <div className="mx-auto form-control">
        <div className="md:w-2/6 shadow-md w-full rounded-xl overflow-hidden">
          <input
            type="text"
            className="focus:outline-0 p-3 h-full w-full text-slate-900"
            placeholder="Search What Are You Want To Read ..."
          />
        </div>
        <div className="md:w-1/5 w-1/2 rounded-xl px-10"></div>
        <div className="md:w-1/5 w-1/2 rounded-xl"></div>
        <div className="md:w-1/5 w-full">
          <Button
            type="submit"
            className="bg-blue-700 h-full rounded px-5 text-center w-full hover:bg-blue-800 text-white"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex justify-between py-5">
        {POSTS.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </div>
    </MainContainer>
  );
};

export default Blogs;
