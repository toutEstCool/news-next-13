"use client";

import { useRouter } from "next/navigation";

import { ReadMoreButtonProps } from "./read-more-button.types";

export const ReadMoreButton = ({ article }: ReadMoreButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 h-10 rounded-lg dark:text-gray-900 hover:bg-orange-500 flex justify-center items-center p-5 m-3"
    >
      Read More
    </button>
  );
};
