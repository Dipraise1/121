import Image from "next/image";
import Hero from "./component/homepage/hero";
import Header from "./common/header";
import Highlights from "./component/homepage/highlights";
import Introduction from "./component/homepage/introduction";
import FeatureCards from "./component/homepage/feature-cards";
import Footer from "./common/footer";
import Dapp from "./dApp/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Highlights />
      <Introduction />
      <FeatureCards />
      <Footer />
    </main>
  );
}
