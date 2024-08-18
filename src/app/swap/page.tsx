"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Header from "../common/header";
import Footer from "../common/footer";
import coinImage from "@/assets/images/hero-graphic.png";
import usdtLogo from "@/assets/images/usdt.png";
import { ArrowDownUp } from 'lucide-react';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { 
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID 
} from '@solana/spl-token';
import { createSwapInstruction } from '../../marketHelper';

// Remove the SolanaProvider interface and global declaration from here

// Replace these with actual addresses
const SOLRAIN_MINT = new PublicKey('Gus6G45ZwTRB17udyLxAGsoKLxbDnDD6GWyWNPB2z2Wg');
const USDT_MINT = new PublicKey('Es9vMFrzaCmnz2Shb9k5xkJFF2ebw7SRjmHQTDjK4gEn');

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [isSwapped, setIsSwapped] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletPublicKey, setWalletPublicKey] = useState<PublicKey | null>(null);
  const [swapStatus, setSwapStatus] = useState('');

  useEffect(() => {
    const checkPhantomWallet = async () => {
      if (typeof window !== 'undefined' && window.solana?.isPhantom) {
        try {
          const resp = await window.solana.connect({ onlyIfTrusted: true });
          setWalletConnected(true);
          setWalletPublicKey(resp.publicKey);
        } catch (err) {
          // User has not connected to the app before or has explicitly disconnected
          console.error('Failed to connect to Phantom wallet:', err);
        }
      }
    };

    checkPhantomWallet();
  }, []);

  const toggleSwap = () => {
    setIsSwapped(!isSwapped);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleSwap = async () => {
    if (!walletConnected || !walletPublicKey) {
      setSwapStatus('Please connect your wallet first.');
      return;
    }

    setSwapStatus('Initiating swap...');

    try {
      const connection = new Connection('https://api.mainnet-beta.solana.com');
      const transaction = new Transaction();

      const swapInstruction = await createSwapInstruction(
        connection,
        walletPublicKey,
        SOLRAIN_MINT,
        USDT_MINT,
        parseFloat(fromAmount),
        parseFloat(toAmount)
      );
      transaction.add(swapInstruction);

      const toTokenAccount = await getAssociatedTokenAddress(
        USDT_MINT,
        walletPublicKey,
        false,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      );
      const toTokenAccountInfo = await connection.getAccountInfo(toTokenAccount);
      if (!toTokenAccountInfo) {
        const createAccountInstruction = createAssociatedTokenAccountInstruction(
          walletPublicKey,
          toTokenAccount,
          walletPublicKey,
          USDT_MINT,
          TOKEN_PROGRAM_ID,
          ASSOCIATED_TOKEN_PROGRAM_ID
        );
        transaction.add(createAccountInstruction);
      }

      if (window.solana) {
        const signedTransaction = await window.solana.signTransaction(transaction);
        const signature = await connection.sendRawTransaction(signedTransaction.serialize());

        await connection.confirmTransaction(signature);

        setSwapStatus('Swap completed successfully!');
      } else {
        setSwapStatus('Phantom Wallet is not available.');
      }
    } catch (error) {
      console.error('Swap failed:', error);
      setSwapStatus('Swap failed. Please try again.');
    }
  };

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.solana) {
      try {
        const resp = await window.solana.connect();
        setWalletConnected(true);
        setWalletPublicKey(resp.publicKey);
      } catch (err) {
        console.error('Failed to connect wallet:', err);
        setSwapStatus('Failed to connect wallet. Please try again.');
      }
    } else {
      setSwapStatus('Phantom Wallet is not available.');
    }
  };

  return (
    <main className="hero-section">
      <Header />
      <section className="w-full max-w-7xl mx-auto px-5 mt-32 mb-16">
        <div className="inline-block mb-10">
          <a className="flex items-center text-blue-400 hover:text-blue-300 transition-colors" href="/">
            <ArrowDownUp className="w-4 h-4 mr-2 rotate-90" />
            Go back to Dapp
          </a>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-6xl text-center leading-tight font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Swap SOLRAIN</h2>
          <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">From</label>
                <div className="flex items-center bg-gray-700/50 rounded-lg p-3">
                  <Image width={32} height={32} src={isSwapped ? usdtLogo : coinImage} alt={isSwapped ? "USDT" : "SOLRAIN"} className="mr-3" />
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    placeholder="0.00"
                    className="bg-transparent text-white text-lg w-full focus:outline-none"
                  />
                  <span className="text-sm text-gray-400">{isSwapped ? "USDT" : "SOLRAIN"}</span>
                </div>
              </div>

              <div className="flex justify-center">
                <button onClick={toggleSwap} className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-colors">
                  <ArrowDownUp size={24} />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">To</label>
                <div className="flex items-center bg-gray-700/50 rounded-lg p-3">
                  <Image width={32} height={32} src={isSwapped ? coinImage : usdtLogo} alt={isSwapped ? "SOLRAIN" : "USDT"} className="mr-3" />
                  <input
                    type="number"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    placeholder="0.00"
                    className="bg-transparent text-white text-lg w-full focus:outline-none"
                  />
                  <span className="text-sm text-gray-400">{isSwapped ? "SOLRAIN" : "USDT"}</span>
                </div>
              </div>

              <button
                onClick={walletConnected ? handleSwap : connectWallet}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                {walletConnected ? "Swap" : "Connect Wallet"}
              </button>

              {swapStatus && (
                <p className="text-center mt-4 text-yellow-500">{swapStatus}</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}