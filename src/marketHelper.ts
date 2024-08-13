import {
  Connection,
  PublicKey,
  TransactionInstruction,
  SYSVAR_RENT_PUBKEY
} from '@solana/web3.js';
import { Market } from '@project-serum/serum';

const DEX_PROGRAM_ID = new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin');
let SERUM_MARKET_ADDRESS: PublicKey;

try {
  SERUM_MARKET_ADDRESS = new PublicKey('...'); // Replace with actual SOLRAIN/USDT market address
} catch (error) {
  console.error("Invalid SERUM_MARKET_ADDRESS:", error);
}

export const createSwapInstruction = async (
  connection: Connection,
  walletPublicKey: PublicKey,
  fromMint: PublicKey,
  toMint: PublicKey,
  fromAmount: number,
  toAmount: number
): Promise<TransactionInstruction> => {
  const instruction = new TransactionInstruction({
    keys: [
      { pubkey: walletPublicKey, isSigner: true, isWritable: true },
      { pubkey: fromMint, isSigner: false, isWritable: false },
      { pubkey: toMint, isSigner: false, isWritable: false },
      { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
    ],
    programId: DEX_PROGRAM_ID,
    data: Buffer.from([]) // Add actual instruction data here
  });

  return instruction;
};

export const getMarketPrice = async (
  connection: Connection,
  fromMint: PublicKey,
  toMint: PublicKey
): Promise<number> => {
  if (!SERUM_MARKET_ADDRESS) {
    throw new Error('SERUM_MARKET_ADDRESS is not set or invalid.');
  }

  const market = await Market.load(connection, SERUM_MARKET_ADDRESS, {}, DEX_PROGRAM_ID);
  const [bids, asks] = await Promise.all([market.loadBids(connection), market.loadAsks(connection)]);

  const isBuyOrder = fromMint.equals(market.quoteMintAddress);

  let bestPrice = 0;
  if (isBuyOrder) {
    let bestAsk = asks.items().next().value;
    if (bestAsk) {
      bestPrice = bestAsk.price;
    }
  } else {
    let bestBid = bids.items().next().value;
    if (bestBid) {
      bestPrice = bestBid.price;
    }
  }

  return bestPrice;
};
