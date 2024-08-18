"use client";

import { useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import Image from "next/image";
import Header from "../common/header";
import stake from "@/assets/images/stake.png";
import earned from "@/assets/images/earned.png";
import withdraw from "@/assets/images/withdraw.png";
import coinImage from "@/assets/images/hero-graphic.png";
import DexScreener from "../common/dex-screener";
import Footer from "../common/footer";

const network = clusterApiUrl("mainnet-beta");

export default function Dapp() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [totalStaked, setTotalStaked] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const resp = await window.solana.connect();
        setWalletAddress(resp.publicKey.toString());
        // Fetch total staked amount after wallet is connected
        fetchTotalStaked(resp.publicKey.toString());
      } catch (err) {
        console.error("Error connecting to wallet", err);
        setError("Failed to connect to wallet");
      }
    } else {
      alert("Please install a Solana wallet extension like Phantom!");
    }
  };

  const fetchTotalStaked = async (publicKeyString: string) => {
    try {
      setIsLoading(true);
      const connection = new Connection(network);
      const publicKey = new PublicKey(publicKeyString);
      // Mock: Replace this with the actual logic to fetch the total staked amount
      const stakedAmount = 1000; // Replace with actual staked amount logic
      setTotalStaked(stakedAmount);
    } catch (err) {
      console.error("Error fetching total staked amount", err);
      setError("Failed to fetch total staked amount");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getBalance = async () => {
      if (walletAddress) {
        setIsLoading(true);
        try {
          const connection = new Connection(network);
          const publicKey = new PublicKey(walletAddress);
          const balance = await connection.getBalance(publicKey);
          setBalance(balance / 1e9); // Convert lamports to SOL
        } catch (err) {
          console.error("Error fetching balance", err);
          setError("Failed to fetch balance");
        } finally {
          setIsLoading(false);
        }
      }
    };
    getBalance();
  }, [walletAddress]);

  return (
    <main className="">
      <Header />
      <section className="hero-section">
      <section className="hero-section w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24">
          <div className="inline-block mb-6">
            <a className="cut-corners-outline flex items-center text-sm" href="/">
              <span className="mr-2">
                <svg className="w-2" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 1.68274L2.5 9.68274L10.5 17.6827" stroke="white" strokeWidth="3" />
                </svg>
              </span>
              Go back
            </a>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              width={160}
              height={160}
              src={coinImage}
              alt="solrain-coin"
              className="w-40 h-40 sm:w-48 sm:h-48"
            />
            <div className="gradient-border">
              <h2 className="mt-4 sm:mt-6 text-4xl sm:text-6xl text-center leading-tight family-alex max-w-xl">
                ${walletAddress ? totalStaked.toLocaleString() : "0"}
              </h2>
            </div>
            {walletAddress ? (
              <div className="mt-4 text-lg">
                <p>Connected account: {walletAddress}</p>
                {isLoading ? (
                  <p>Loading balance...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : (
                  <p>Balance: {balance} SOL</p>
                )}
            
              </div>
            ) : (
              <button 
                className="mt-4 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-white text-center"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-10 w-full">
              <FeatureCard
                image={stake}
                title="Stake SOLRAIN"
                buttonText="Stake now"
              />
              <FeatureCard
                image={earned}
                title="SOLRAIN Earned"
                buttonText="Claim"
                secondaryButtonText="Compound"
              />
              <FeatureCard
                image={withdraw}
                title="Emergency Withdrawal"
                buttonText="Withdraw"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-lg px-4">
          <DexScreener />
        </div>
      </section>
      </section>
      <Footer />
    </main>
  );
}

interface FeatureCardProps {
  image: any;
  title: string;
  buttonText: string;
  secondaryButtonText?: string;
}

function FeatureCard({ image, title, buttonText, secondaryButtonText }: FeatureCardProps) {
  return (
    <div className="feature-card py-6 px-4 text-center bg-gray-800 rounded-lg shadow-lg">
      <Image width={60} height={60} src={image} alt={title} className="mx-auto" />
      <h3 className="text-2xl sm:text-3xl family-alex mt-4">{title}</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
        <a className="cut-corners w-full sm:w-auto bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-white text-center" href="#">
          {buttonText}
        </a>
        {secondaryButtonText && (
          <a className="cut-corners-secondary w-full sm:w-auto hover:bg-gray-700 py-2 px-4 rounded-lg text-white text-center" href="#">
            {secondaryButtonText}
          </a>
        )}
      </div>
    </div>
  );
}
