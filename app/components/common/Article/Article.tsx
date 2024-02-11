import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleType } from "./resources";
const Article = ({ post }: ArticleType) => {
  return (
    <div
      key={post.title}
      className="flex flex-col overflow-hidden w-96 rounded-lg hover:shadow-xl shadow-lg"
    >
      <div className="flex-shrink-0">
        <Image
          width={384}
          height={256}
          className="object-cover w-full h-[256px]"
          src={post.imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <Link
              href={"blogs/categories/" + post.category.href}
              className="hover:underline"
            >
              {post.category.name}
            </Link>
          </p>
          <Link
            href={"/blogs/" + post.id}
            className="text-xl font-semibold text-gray-900"
          >
            {post.title.length > 66
              ? post.title.slice(0, 66) + " ..."
              : post.title}
          </Link>
          {post.description.length > 100 ? (
            <p className="mt-3 text-base text-gray-500">
              {post.description.slice(0, 100)}{" "}
              <Link
                href={"/blogs/" + post.id + "#caption"}
                className="text-blue-700 hover:underline text-lg font-semibold"
              >
                more ...
              </Link>
            </p>
          ) : (
            <p className="mt-3 text-base text-gray-500">{post.description}</p>
          )}
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <Link href={"author/" + post.author.id}>
              <span className="sr-only">{post.author.name}</span>
              <Image
                className="h-10 w-10 rounded-full"
                src={post.author.imageUrl}
                alt=""
              />
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <Link
                href={"author/" + post.author.id}
                className="hover:underline"
              >
                {post.author.name}
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.datetime}>{post.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
