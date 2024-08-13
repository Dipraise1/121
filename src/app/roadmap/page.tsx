import Image from "next/image";
import Header from "../common/header";
import coinImage from "@/assets/images/hero-graphic.png";
import Footer from "../common/footer";

export default function Roadmap() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="hero-section mb-20 before:bg-contain">
        <div className="w-full max-w-7xl mx-auto px-5 mt-32">
          <div className="inline-block">
            <a className="cut-corners-outline flex items-center" href="/">
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
                    stroke-width="3"
                  />
                </svg>
              </span>
              Go back
            </a>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto items-center justify-between text-sm lg:flex px-5 ">
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              width={200}
              height={200}
              src={coinImage}
              alt="solrain-coin"
            />
            <h2 className="mt-6 text-8xl text-center leading-10 family-alex max-w-xl">
              Roadmap
            </h2>
            <div className="feature-card mt-16 pt-3  w-full max-w-3xl">
              <h3 className="text-5xl family-alex mt-4">  Q2</h3>
              <ul className="mt-8 divide-y divide-sky-50/10 px-16">
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">
                        Design a project with a sustainable concept
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="w-10 h-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="22.8645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_216)"
                            stroke-width="2.90323"
                          />
                          <path
                            d="M14.3357 24.3162L19.6885 29.669L33.1159 16.2416"
                            stroke="white"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_216"
                              x1="23"
                              y1="0.364502"
                              x2="23"
                              y2="45.3645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Completed</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">Create social media accounts</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="w-10 h-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="22.8645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_216)"
                            stroke-width="2.90323"
                          />
                          <path
                            d="M14.3357 24.3162L19.6885 29.669L33.1159 16.2416"
                            stroke="white"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_216"
                              x1="23"
                              y1="0.364502"
                              x2="23"
                              y2="45.3645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Completed</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">Make a killer whitepaper</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="w-10 h-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="22.8645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_216)"
                            stroke-width="2.90323"
                          />
                          <path
                            d="M14.3357 24.3162L19.6885 29.669L33.1159 16.2416"
                            stroke="white"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_216"
                              x1="23"
                              y1="0.364502"
                              x2="23"
                              y2="45.3645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Completed</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">Seed sale</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="w-10 h-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="22.8645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_216)"
                            stroke-width="2.90323"
                          />
                          <path
                            d="M14.3357 24.3162L19.6885 29.669L33.1159 16.2416"
                            stroke="white"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_216"
                              x1="23"
                              y1="0.364502"
                              x2="23"
                              y2="45.3645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">
                        Successfully completed - within minutes
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">
                        Website and dashboard/dapp development
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="w-10 h-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="22.8645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_216)"
                            stroke-width="2.90323"
                          />
                          <path
                            d="M14.3357 24.3162L19.6885 29.669L33.1159 16.2416"
                            stroke="white"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_216"
                              x1="23"
                              y1="0.364502"
                              x2="23"
                              y2="45.3645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">
                        Partially completed at time of writing (April 18) - on
                        schedule - previews already available in chat
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="bg-gradient-to-b from-[#423EE0] to-[#0E0D4F] divide-y divide-sky-50/10 w-full h-full py-4 px-16">
                <div>
                  <h3 className="text-lg max-w-sm font-light text-white">
                    Find the perfect deal for a smooth presale on the best
                    platform: <b>Solpad</b>
                  </h3>
                  <p className="text-sm font-light text-white/50">
                    Our no.1 choice but we need to make a deal first
                  </p>
                </div>
                <div className="mt-3 pt-3">
                  <div className="grid grid-cols-2 items-center">
                    <div className="pr-3">
                      <p className="text-lg">
                        Start marketing targeted at presale and announce presale
                        date and details
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="w-10 h-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="22.8645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_216)"
                            stroke-width="2.90323"
                          />
                          <path
                            d="M14.3357 24.3162L19.6885 29.669L33.1159 16.2416"
                            stroke="white"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_216"
                              x1="23"
                              y1="0.364502"
                              x2="23"
                              y2="45.3645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Presale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-card mt-8 w-full max-w-3xl ">
              <div className="bg-gradient-to-b from-[#423EE0] to-[#0E0D4F] w-full h-full py-4 px-16">
                <h3 className="text-5xl family-alex text-center mb-4">
                  Q3
                </h3>
                <div>
                  <h3 className="text-lg max-w-sm font-light text-white">
                    Find the smoothest DEX for transactions and then negotiate
                    with owners to get the best deal for Launch: <b>Jupiter</b>
                  </h3>
                  <p className="text-sm font-light text-white/50">
                    Our no. 1 choice but our options are open
                  </p>
                </div>
                <div className="border-t mt-3 border-t-sky-50/10">
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div className="pr-3">
                      <p className="text-lg">
                        Second round of marketing, targeted at launch
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="w-10 h-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="22.8645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_216)"
                            stroke-width="2.90323"
                          />
                          <path
                            d="M14.3357 24.3162L19.6885 29.669L33.1159 16.2416"
                            stroke="white"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_216"
                              x1="23"
                              y1="0.364502"
                              x2="23"
                              y2="45.3645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Launch</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="mt-8 divide-y divide-sky-50/10 px-16">
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">
                        CMC Coingecko and other listings
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="h-10 w-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="23.3645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_224)"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_224"
                              x1="23"
                              y1="0.864502"
                              x2="23"
                              y2="45.8645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Soon</p>
                    </div>
                  </div>
                </li>


                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">
                      Create $SOLRAIN NFT marketplace
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="h-10 w-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="23.3645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_224)"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_224"
                              x1="23"
                              y1="0.864502"
                              x2="23"
                              y2="45.8645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Soon</p>
                    </div>
                  </div>
                </li>




                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">
                      Launch SOLANIAN NFT BOOSTER COLLECTION.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="h-10 w-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="23.3645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_224)"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_224"
                              x1="23"
                              y1="0.864502"
                              x2="23"
                              y2="45.8645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Soon</p>
                    </div>
                  </div>
                </li>



                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">
                        Start the weekly giveaways/competitions/lotteries
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="h-10 w-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="23.3645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_224)"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_224"
                              x1="23"
                              y1="0.864502"
                              x2="23"
                              y2="45.8645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Soon</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">
                        Use Protocol owned liquidity for investment purposes and
                        buyback to guarantee the drip rewards to our community
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="h-10 w-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="23.3645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_224)"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_224"
                              x1="23"
                              y1="0.864502"
                              x2="23"
                              y2="45.8645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Soon</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">Seek partnerships</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="h-10 w-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="23.3645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_224)"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_224"
                              x1="23"
                              y1="0.864502"
                              x2="23"
                              y2="45.8645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Soon</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 my-3 items-center">
                    <div>
                      <p className="text-lg">
                        Further expand the Dapp/dashboard according to the
                        community's wishes
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          className="h-10 w-10"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="23"
                            cy="23.3645"
                            r="21.0484"
                            fill="#02020E"
                            fill-opacity="0.8"
                            stroke="url(#paint0_linear_50_224)"
                            stroke-width="2.90323"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_50_224"
                              x1="23"
                              y1="0.864502"
                              x2="23"
                              y2="45.8645"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#7B44F2" />
                              <stop
                                offset="1"
                                stop-color="#4547C9"
                                stop-opacity="0.38"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <p className="text-lg">Soon</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
