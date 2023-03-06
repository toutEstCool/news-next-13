import Link from "next/link";

import { NavLinkProps } from "./nav-link-type";
import styles from "./nav-link.module.scss";

export const NavLink: React.FC<NavLinkProps> = ({ category, isActive }) => {
  return (
    <Link
      className={`${styles.navLink} ${
        isActive && "underline decoration-orange-400 underline-offset-4"
      }`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
};
