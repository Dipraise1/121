"use client";
import Image from "next/image";
import lowGas from "@/assets/images/low-gas.png";
import daily from "@/assets/images/daily.png";
import compounding from "@/assets/images/compounding.png";
import paper from "@/assets/images/paper.png";
import exchange from "@/assets/images/exchange.png";
import { useState } from "react";
import DexScreener from "@/app/common/dex-screener";

export default function Highlights() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleFule, setIsVisibleFule] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleVisibilityFule = () => {
    setIsVisibleFule(!isVisibleFule);
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-5 my-12">
        <div className="flex gap-5 w-full overflow-x-auto md:grid md:grid-cols-5">
          <div className="flex flex-col gap-5 items-center md:items-center flex-shrink-0">
            <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center">
              <Image width={82} height={82} src={lowGas} alt="solrain-coin" />
            </div>
            <div className="flex flex-col md:items-center items-center text-center">
              <h3 className="text-xl mt-3 font-semibold">Low gas fees</h3>
              {!isVisible && (
                <button
                  onClick={toggleVisibility}
                  className="cut-corners-outline mt-3"
                >
                  Info
                </button>
              )}
              {isVisible && (
                <p
                  onClick={toggleVisibility}
                  className="cursor-pointer mt-3 md:text-center"
                >
                  Gas fees are very low on Solana which makes it perfect for
                  claiming and compounding your rewards on a daily basis
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-center flex-shrink-0">
            <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center">
              <Image width={82} height={82} src={daily} alt="solrain-coin" />
            </div>
            <div className="flex flex-col md:items-center items-center text-center">
              <h3 className="text-xl mt-3 font-semibold">
                1% daily for 365 days
              </h3>
              {!isVisibleFule && (
                <button
                  onClick={toggleVisibilityFule}
                  className="cut-corners-outline mt-3"
                >
                  Find out more
                </button>
              )}
              {isVisibleFule && (
                <p
                  onClick={toggleVisibilityFule}
                  className="cursor-pointer mt-3 md:text-center"
                >
                  You will receive a daily return of the total amount of tokens
                  you have for 365 days
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-center flex-shrink-0">
            <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center">
              <Image
                width={82}
                height={82}
                src={compounding}
                alt="solrain-coin"
              />
            </div>
            <div className="flex flex-col md:items-center items-center text-center">
              <h3 className="text-xl mt-3 font-semibold">
                Compounding Interest
              </h3>
              <a
                href="https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php"
                target="_blank"
                className="cut-corners-outline mt-5"
              >
                View table
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-center flex-shrink-0">
            <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center">
              <Image width={82} height={82} src={paper} alt="solrain-coin" />
            </div>
            <div className="flex flex-col md:items-center items-center text-center">
              <h3 className="text-xl mt-3 font-semibold">White Paper</h3>
              <a 
                href="/assets/solrain.pdf" 
                target="_blank"
                rel="noreferrer"
                className="cut-corners-outline mt-5"
              >
                Info
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-center flex-shrink-0">
            <div className="w-20 h-20 flex-shrink-0 flex justify-center items-center">
              <Image width={82} height={82} src={exchange} alt="solrain-coin" />
            </div>
            <div className="flex flex-col md:items-center items-center text-center">
              <h3 className="text-xl mt-3 font-semibold">Exchange</h3>
              <a
                href="/swap"
                target="_blank"
                className="cut-corners-outline mt-5"
              >
                Buy Solrain
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 mx-auto max-w-lg">
          <DexScreener />
        </div>
      </div>
    </>
  );
}
