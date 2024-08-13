import Image from "next/image";
import Header from "../common/header";
import Footer from "../common/footer";
import pieChartImage from "@/assets/images/Piechart 2 edit 240813_1.png";

export default function Tokenomics() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="hero-section mb-20 before:bg-contain">
        <div className="w-full max-w-7xl mx-auto px-5 mt-32">
          <div className="inline-block">
            <a className="cut-corners-outline flex items-center text-white" href="/">
              <span>
                <svg
                  className="w-2"
                  viewBox="0 0 12 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 1.68274L2.5 9.68274L10.5 17.6827"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </span>
              Go back
            </a>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto items-center justify-between text-sm lg:flex px-5 py-10">
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              width={600}
              height={200}
              src={pieChartImage}
              alt="tokenomics-piechart"
            />
            <h2 className="mt-6 text-8xl text-center leading-tight family-alex max-w-xl">
              Tokenomics
            </h2>
            <div className="feature-card mt-16 pt-3 w-full max-w-3xl px-8">
              <h3 className="text-5xl family-alex mt-4">$SORAIN</h3>
              <p className="mt-4 text-lg text-center">
                The crypto that gives you 1% APR. 3.65x your initial deposit.
                Receive 1% per day on your initial deposit for 365 days.
                Simply click a button for your rewards to drip into your available balance.
              </p>
              <h3 className="text-5xl family-alex mt-8">Token Supply</h3>
              <p className="mt-4 text-lg text-center">50 million $SOLRAIN tokens.</p>
              <h3 className="text-5xl family-alex mt-8">Soft Cap</h3>
              <p className="mt-4 text-lg text-center">500 SOL</p>
              <h3 className="text-5xl family-alex mt-8">Hard Cap</h3>
              <p className="mt-4 text-lg text-center">1500 SOL</p>
              <ul className="mt-8 divide-y divide-sky-50/10 px-16">
                <li className="py-4 text-lg text-center">10% private sale</li>
                <li className="py-4 text-lg text-center">5% community wallet</li>
                <li className="py-4 text-lg text-center">15% team</li>
                <li className="py-4 text-lg text-center">20% presale</li>
                <li className="py-4 text-lg text-center">15% reward pool</li>
                <li className="py-4 text-lg text-center">10% liquidity</li>
              </ul>
              <div className="bg-gradient-to-b from-[#423EE0] to-[#0E0D4F] divide-y divide-sky-50/10 w-full h-full py-4 px-16 mt-8 rounded-lg">
                <h3 className="text-lg font-light text-white text-center">
                  We sell 22.5 million tokens @ 0.001
                </h3>
                <h3 className="text-lg font-light text-white text-center mt-4">
                  We will pool 5 million tokens (10%)
                </h3>
                <h3 className="text-lg font-light text-white text-center mt-4">
                  Launch price $0.012
                </h3>
                <p className="text-sm font-light text-white/50 text-center mt-4">
                  This way we have more protocol-owned liquidity to overshadow
                  the token liquidity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
