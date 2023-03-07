"use client";

import { usePathname } from "next/navigation";

import { categories } from "../../../constants/constants";
import { NavLink } from "../../../features/nav-link/nav-link";

export const HeaderNavBar: React.FC = (): JSX.Element => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.split("/").pop() === path;

  return (
    <nav className="hidden md:inline">
      <ul className="flex items-center gap-10">
        {categories.map((category) => (
          <li key={category}>
            <NavLink category={category} isActive={isActive(category)} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
