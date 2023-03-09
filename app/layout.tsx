import "../styles/globals.css";
import Providers from "./proveders";
import { Banner } from "./widgets/banner/banner";
import { Header } from "./widgets/header/header";
import { InfoPanel } from "./widgets/info-panel/info-panel";

export const metadata = {
  title: "True News in Your City",
  description: "Find out the latest news first",
  authors: { name: "The Frontend", url: "https://github.com/toutEstCool" },
  icons: {
    icon: "https://i.pinimg.com/564x/b7/41/26/b74126558cdcd47c6c3344bc933bb40b.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Providers> */}
      <body className="bg-gray-100  dark:bg-zinc-900 transition-all duration-700 dark:text-white">
        <Banner />
        <div className="max-w-[1335px] w-[100%] mx-auto">
          <div>
            <Header />
            <InfoPanel />
          </div>
          <div>{children}</div>
        </div>
      </body>
      {/* </Providers> */}
    </html>
  );
}
