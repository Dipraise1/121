"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import coinImage from "@/assets/images/solrain-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Solrain exchange", href: "/swap" },
  { name: "Dapp", href: "/dApp" },
  { name: "NFT Marketplace", href: "/nft-marketplace" },
  { name: "Roadmap", href: "/assets/solrain.pdf" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Gitbook docs", href: "https://solrain.gitbook.io" },
];

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/SolrainOfficial",
    svgPath: "M27.0103 27.4887C27.2029 27.3041 27.3537 27.0804 27.4527 26.8326L32.5127 0.986226C32.5127 -0.737575 30.1763 0.302009 30.1763 0.302009L1.75478 11.5942C1.75478 11.5942 0.41022 12.061 0.518952 12.9202C0.62238 13.7874 1.72031 14.1799 1.72031 14.1799L8.86745 16.6145L26.0339 5.57154C26.0339 5.57154 27.0231 4.96158 26.9912 5.57154C26.9912 5.57154 27.1689 5.68027 26.6332 6.1815C26.1055 6.68272 13.1504 18.4788 13.1504 18.4788L12.2196 26.5383C12.3441 26.5857 12.4786 26.6011 12.6107 26.583C12.7428 26.565 12.8682 26.514 12.9754 26.4348L17.5952 22.1704L24.7954 27.7661C25.0275 27.8976 25.2852 27.9778 25.5509 28.0014C25.8167 28.025 26.0844 27.9915 26.3361 27.9031C26.5878 27.8146 26.8177 27.6734 27.0103 27.4887Z"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/solrainonsol",
    svgPath: "M25.7147 0.777771H30.6215L19.9013 12.8265L32.5127 29.2222H22.6382L14.904 19.2784L6.05444 29.2222H1.14459L12.6108 16.3348L0.512695 0.777771H10.6379L17.629 9.86687L25.7147 0.777771ZM23.9923 26.334H26.7114L9.16054 3.51427H6.24283L23.9923 26.334Z"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/solrain_official",
    svgPath: "M16.5134 11.3421C15.0131 11.3421 13.5742 11.9381 12.5133 12.999C11.4524 14.0599 10.8564 15.4987 10.8564 16.9991C10.8564 18.4994 11.4524 19.9383 12.5133 20.9991C13.5742 22.06 15.0131 22.656 16.5134 22.656C18.0138 22.656 19.4526 22.06 20.5135 20.9991C21.5744 19.9383 22.1704 18.4994 22.1704 16.9991C22.1704 15.4987 21.5744 14.0599 20.5135 12.999C19.4526 11.9381 18.0138 11.3421 16.5134 11.3421Z"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61557654521554",
    svgPath: "M32.5127 16.04C32.5127 7.20798 25.3447 0.039978 16.5127 0.039978C7.6807 0.039978 0.512695 7.20798 0.512695 16.04C0.512695 23.784 6.0167 30.232 13.3127 31.72V20.84H10.1127V16.04H13.3127V12.04C13.3127 8.95198 15.8247 6.43998 18.9127 6.43998H22.9127V11.24H19.7127C18.8327 11.24 18.1127 11.96 18.1127 12.84V16.04H22.9127V20.84H18.1127V31.96C26.1927 31.16 32.5127 24.344 32.5127 16.04Z"
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@solrainofficial",
    svgPath: "M20.4167 6.11201C19.323 4.8634 18.7202 3.2599 18.7207 1.60001H13.7767V21.44C13.7386 22.5136 13.2853 23.5306 12.5123 24.2767C11.7394 25.0228 10.707 25.4399 9.6327 25.44C7.3607 25.44 5.4727 23.584 5.4727 21.28C5.4727 18.528 8.1287 16.464 10.8647 17.312V12.256C5.3447 11.52 0.512695 15.808 0.512695 21.28C0.512695 26.608 4.9287 30.4 9.6167 30.4C14.6407 30.4 18.7207 26.32 18.7207 21.28V11.216C20.7255 12.6558 23.1325 13.4282 25.6007 13.424V8.48001C25.6007 8.48001 22.5927 8.62401 20.4167 6.11201Z"
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-lg top-0 fixed w-full z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 p-5 md:p-0"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <div className="hidden md:block">
            <Image
              width={200}
              height={200}
              src={coinImage}
              alt="solrain-coin"
            />
          </div>
          <div className="hidden md:flex justify-center gap-5 flex-wrap">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 px-6 py-3 rounded-lg text-white font-semibold">
            Connect wallet
          </button>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex justify-start">
              <Image
                width={100}
                height={100}
                src={coinImage}
                alt="solrain-coin"
              />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="space-y-2 py-6">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-white hover:text-gray-300">
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 33 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={link.svgPath}
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 px-6 py-3 rounded-lg text-white font-semibold">
                  Connect wallet
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}