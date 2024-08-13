import coinImage from "@/assets/images/hero-graphic.png";
import mobileLogo from "@/assets/images/mobile-logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="w-full max-w-7xl mx-auto items-center justify-between text-sm lg:flex px-5 md:mt-48 mt-16">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-start -ml-10 mb-10 md:hidden">
              <Image
                width={350}
                height={350}
                src={mobileLogo}
                alt="solrain-coin"
              />
            </div> 
            <div className="w-56 h-56">
              <Image
                width={350}
                height={350}
                src={coinImage}
                alt="solrain-coin"
              />
            </div>
            <h2 className="mt-6 md:text-8xl text-5xl text-center md:leading-10 leading-7 family-alex max-w-4xl">
              Proven successful DRIP concept on Solana
            </h2>
            <p className="text-center mt-6 max-w-xl text-base font-light">
              $SOLRAIN the first project of its kind on the Solana blockchain. $SOLRAIN strategically combines the wealth generating power of DRIP tokenomics with the stability and security of Protocol Owned Liquidity, ensuring a sustainable and profitable return on investment for all $SOLRAIN users.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-10">
              <a href="/dApp" className="cut-corners">
                LAUNCH DAPP
              </a>
              <a href="/swap" className="cut-corners">
                $SOLRAIN EXCHANGE
              </a>
              <a href="/nft-marketplace" className="cut-corners">
                SOLRAIN NFT MARKETPLACE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
