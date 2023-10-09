import { Hex } from "viem";
import {
  polygon,
  mainnet,
  sepolia,
} from "wagmi/chains";

export type SupportedChain =
  | typeof mainnet
  | typeof polygon
  | typeof sepolia;

export const SupportedChains = [
  mainnet,
  polygon,
  sepolia,
];

export const ValidPeriods = [
  "min",
  "day",
  "week",
  "month",
  "year",
];

export type Period =
  (typeof ValidPeriods)[number];

export const SupportedChainIds =
  SupportedChains.map((chain) => chain.id);

export const RouterAddress =
  "0x249b13D5d31cdF4a6EB536F1B94B497dF9238f2d";

export interface SubscriptionPrompt {
  merchantDomain: string;
  merchantAddress: Hex;
  product: string;
  tokenSymbol: string;
  amount: number;
  periodHuman: Period;
  periodSeconds: number;
  availableChains: SupportedChain[];
  onSuccessUrl: string;
}

export interface RequiredSearchParams {
  product: string;
  token: string;
  amount: string;
  period: string;
  chains: string;
  domain: string;
}

export const ChainsSettings = {
  [mainnet.id]: {
    tokens: {
      USDT: {
        address:
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        decimals: 6,
      },
      LUSD: {
        address:
          "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
        decimals: 18,
      },
    },
  },
  [polygon.id]: {
    tokens: {
      USDT: {
        address: "",
        decimals: 0,
      },
      LUSD: {
        address:
          "0x23001f892c0c82b79303edc9b9033cd190bb21c7",
        decimals: 18,
      },
    },
  },
  [sepolia.id]: {
    tokens: {
      USDT: {
        address:
          "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0",
        decimals: 6,
      },
      AAVE: {
        address:
          "0xD3B304653E6dFb264212f7dd427F9E926B2EaA05",
        decimals: 18,
      },
    },
  },
};
