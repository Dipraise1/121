import Image from "next/image";
import introGraphic from "@/assets/images/intro-graphic.png";

export default function Introduction() {
  return (
    <>
      <section className="intro-bg">
        <div className="w-full max-w-7xl mx-auto px-5 my-12">
          <div className="grid grid-cols-12 items-center">
            <div className="md:col-span-6 col-span-12">
              <h2 className="mt-6 text-6xl leading-10 family-alex max-w-xl">
                FIRST OF ITS KIND LONG TERM PROJECT.
              </h2>
              <p className="mt-3 text-base font-light">
                SOLRAIN One of the first official projects on SOLANA that can
                guarantee 1% APR daily on your initial investment for one year!
              </p>
            </div>
            <div className="md:col-span-6 col-span-12">
              <Image
                className="ml-auto"
                width={550}
                height={550}
                src={introGraphic}
                alt="solrain-coin"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
