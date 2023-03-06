import "../styles/globals.css";
import { Banner } from "../widgets/banner/banner";
import { Header } from "../widgets/header/header";
import { InfoPanel } from "../widgets/info-panel/info-panel";

export const metadata = {
  title: "True News in Your City",
  description: "Find out the latest news first",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black dark:bg-zinc-900 transition-all duration-700 dark:text-white">
        <Banner />
        <div className="max-w-[1335px] w-[100%] mx-auto">
          <div>
            <Header />
            <InfoPanel />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
