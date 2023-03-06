import "../styles/globals.css";
import { Banner } from "../widgets/banner/banner";
import { Footer } from "../widgets/footer/foooter";
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
      <body>
        <Banner />
        <div className="max-w-[1335px] w-[100%] mx-auto">
          <div>
            <Header />
            <InfoPanel />
          </div>
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
