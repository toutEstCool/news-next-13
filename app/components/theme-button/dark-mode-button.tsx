"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <BsSun
          onClick={() => setTheme("light")}
          size={20}
          className="cursor-pointer text-yellow-500"
        />
      ) : (
        <BsMoon
          onClick={() => setTheme("dark")}
          size={20}
          className="cursor-pointer text-gray-900"
        />
      )}
    </div>
  );
};
