import { PublicKey, Transaction } from '@solana/web3.js';

declare global {
  interface Window {
    solana?: {
      connect: (options?: { onlyIfTrusted: boolean }) => Promise<{ publicKey: PublicKey }>;
      isPhantom: boolean;
      signTransaction: (transaction: Transaction) => Promise<Transaction>;
    };
  }
}

// This empty export is necessary to make this a module
export {};