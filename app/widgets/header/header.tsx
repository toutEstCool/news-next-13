import Link from "next/link";

import DarkModeButton from "../../components/theme-button/change-theme-button";
import { HeaderNavBar } from "./nav/nav";
import { Logo } from "./ui/logo";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header
      className="flex justify-between items-center h-20 z-10 px-5 lg:px-0"
      role="banner"
    >
      <div>
        <Link href="/" prefetch={false}>
          <Logo />
        </Link>
      </div>
      <HeaderNavBar />

      <div className="flex items-center gap-5">
        <DarkModeButton />
        <button className="bg-indigo-500 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
          Subscribe
        </button>
      </div>
    </header>
  );
};
