"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;

    router.push(`/search?term=${searchValue}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto flex justify-between items-center text-black"
    >
      <input
        placeholder="Search Keywords..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="search"
        name="search"
        className="w-[60rem] h-[45px] placeholder-gray-500 outline-none bg-transparent text-gray-500
        dark:text-orange-400 text-[20px]"
      />
    </form>
  );
};
