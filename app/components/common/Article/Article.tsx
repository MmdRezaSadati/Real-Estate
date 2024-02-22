import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleType } from "./resources";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Article = ({ post }: ArticleType) => {
  return (
    <Box
      key={post.title}
      className="flex flex-col overflow-hidden w-96 rounded-lg hover:shadow-xl shadow-lg"
    >
      <Box className="flex-shrink-0">
        <Image
          width={384}
          height={256}
          className="object-cover w-full h-[256px]"
          src={post.imageUrl}
          alt=""
        />
      </Box>
      <Box className="flex flex-1 flex-col justify-between bg-white p-6">
        <Box className="flex-1">
          <Typography
            variant="body2"
            className="text-sm font-medium text-indigo-600"
          >
            <Link
              href={"blogs/categories/" + post.category.href}
              className="hover:underline"
            >
              {post.category.name}
            </Link>
          </Typography>
          <Link
            href={"/blogs/" + post.id}
            className="text-xl font-semibold text-gray-900"
          >
            {post.title.length > 66
              ? post.title.slice(0, 66) + " ..."
              : post.title}
          </Link>
          {post.description.length > 100 ? (
            <Typography
              variant="body2"
              className="mt-3 text-base text-gray-500"
            >
              {post.description.slice(0, 100)}{" "}
              <Link
                href={"/blogs/" + post.id + "#caption"}
                className="text-blue-700 hover:underline text-lg font-semibold"
              >
                more ...
              </Link>
            </Typography>
          ) : (
            <Typography
              variant="body2"
              className="mt-3 text-base text-gray-500"
            >
              {post.description}
            </Typography>
          )}
        </Box>
        <Box className="mt-6 flex items-center">
          <Box className="flex-shrink-0">
            <Link href={"author/" + post.author.id}>
              <Box component={"span"} className="sr-only">
                {post.author.name}
              </Box>
              <Image
                className="h-10 w-10 rounded-full"
                src={post.author.imageUrl}
                alt=""
              />
            </Link>
          </Box>
          <Box className="ml-3">
            <Typography
              variant="body2"
              className="text-sm font-medium text-gray-900"
            >
              <Link
                href={"author/" + post.author.id}
                className="hover:underline"
              >
                {post.author.name}
              </Link>
            </Typography>
            <Box className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.datetime}>{post.date}</time>
              <Box component={"span"} aria-hidden="true">
                &middot;
              </Box>
              <Box component={"span"}>{post.readingTime} read</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
