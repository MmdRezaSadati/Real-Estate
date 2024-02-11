import { StaticImageData } from "next/image";

interface ArticleType {
  post: {
    id: string;
    title: string;
    imageUrl: string | StaticImageData;
    category: {
      href: string;
      name: string;
    };
    readingTime: string;
    datetime: string;
    date: string;
    author: {
      id: string;
      name: string;
      imageUrl: string | StaticImageData;
    };
    description: string;
  };
}
export default ArticleType;
