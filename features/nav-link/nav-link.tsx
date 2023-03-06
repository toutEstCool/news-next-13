import Link from "next/link";

import { NavLinkProps } from "./nav-link-type";
import styles from "./nav-link.module.scss";

export const NavLink: React.FC<NavLinkProps> = ({
  category,
  isActive = "",
}): JSX.Element => {
  return (
    <Link
      className={`${styles.navLink} ${isActive && styles.navLinkActive}`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
};
