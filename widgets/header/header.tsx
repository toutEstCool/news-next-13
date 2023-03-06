import Link from "next/link";

import { Logo } from "./ui/logo";
import { HeaderNavBar } from "./ui/nav/nav";

export const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center h-20 z-10" role="banner">
      <div>
        <Link href="/" prefetch={false}>
          <Logo />
        </Link>
      </div>
      <HeaderNavBar />
    </header>
  );
};
