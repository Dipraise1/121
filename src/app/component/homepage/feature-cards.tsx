import bonk from "@/assets/images/bonk.png";
import contract from "@/assets/images/contract-address.png";
import roadmap from "@/assets/images/roadmap.png";
import Image from "next/image";
export default function FeatureCards() {
  return (
    <>
    <section className="py-12 bg-[#030146] w-full">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="feature-card flex flex-col justify-between py-3 px-8 text-center h-full">
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <Image width={80} height={80} src={bonk} alt="solrain-coin" />
              </div>
              <p className="text-sm font-normal"> SOLRAIN  </p>
              <h3 className="text-4xl family-alex mt-4">$SOLRAIN Tokenomics</h3>
              <p className="text-sm font-normal">
              How We Make The Drip Sustainable
              </p>
            </div>
            <a className="cut-corners mt-3 mb-2" href="/tokenomics">
            Enter
            </a>
          </div>
          <div className="feature-card flex flex-col justify-between py-3 px-8 text-center h-full">
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <Image width={80} height={80} src={contract} alt="solrain-coin" />
              </div>
              <h3 className="text-4xl family-alex mt-4">Contract address</h3>
              <p className="text-sm font-normal">
                Find the details about the contract address
              </p>
            </div>
            <a className="cut-corners mt-3 mb-2" href="#">
              view details
            </a>
          </div>
          <div className="feature-card flex flex-col justify-between py-3 px-8 text-center h-full">
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <Image width={80} height={80} src={roadmap} alt="solrain-coin" />
              </div>
              <h3 className="text-4xl family-alex mt-4">Roadmap</h3>
              <p className="text-sm font-normal">
                Get to know about our spectacular plans for the future
              </p>
            </div>
            <a className="cut-corners mt-3 mb-2" href="/roadmap">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
  
  );
}
