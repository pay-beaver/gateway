import { Chain, Hex } from "viem";
import {
  ChainsSettings,
  SupportedChainIds,
  SupportedChains,
} from "./constants";
import { SupportedChain } from "./types";

export const MinuteInSeconds = 60;
export const HourInSeconds = MinuteInSeconds * 60;
export const DayInSeconds = HourInSeconds * 24;
export const WeekInSeconds = DayInSeconds * 7;
export const MonthInSeconds = DayInSeconds * 30;
export const YearInSeconds = DayInSeconds * 365;

export const HumanAndSecondsPeriods: [
  string,
  number
][] = [
  ["year", YearInSeconds],
  ["month", MonthInSeconds],
  ["week", WeekInSeconds],
  ["day", DayInSeconds],
  ["hour", HourInSeconds],
  ["minute", MinuteInSeconds],
  ["second", 1],
];

// Take a number of seconds and converts it to a human-readable such as
// "month", "2 weeks", etc.
export function timeSecondsToHuman(
  secondsAmount: number
): string {
  let amount: number = secondsAmount;
  let unit: string = "second";

  for (const [
    unitName,
    baseAmount,
  ] of HumanAndSecondsPeriods) {
    if (secondsAmount % baseAmount === 0) {
      amount = secondsAmount / baseAmount;
      unit = unitName;
      break;
    }
  }

  if (amount === 1) {
    return unit; // return "week" instead of "1 week"
  }

  unit += "s";
  return `${amount} ${unit}`;
}

// Takes a string with a number of days like "30d" and converts it
// to a number of seconds such as 2592000.
export function timeDaysSeconds(
  humanDays: string
): number {
  if (humanDays === "0") return 0;

  const regexp = /^[0-9]\d*d$/; // must be in format like 100d (aka 100 days)
  if (!regexp.test(humanDays)) {
    throw new Error(
      `Provided period ${humanDays} is not valid. Example valid period: 30d.`
    );
  }
  const days = parseInt(
    humanDays.slice(0, humanDays.length - 1)
  );
  return days * 60 * 60 * 24;
}

export function normalizeChainName(
  chainName: string
): string {
  return chainName
    .toLowerCase()
    .replaceAll(" ", "-");
}

export function chainToNormalizedName(
  chain: SupportedChain
): string {
  return normalizeChainName(chain.name);
}

export function getChainByName(
  chainName: string
): SupportedChain | null {
  const normalizedSearchedChainName =
    normalizeChainName(chainName);

  for (const chain of SupportedChains) {
    if (
      normalizeChainName(chain.name) ===
      normalizedSearchedChainName
    ) {
      return chain;
    }
  }

  return null;
}

export function getAvailableTokensSymbols(
  chains: SupportedChain[]
): string[] {
  const tokensSet = chains
    .map(
      (chain) =>
        new Set(
          Object.keys(
            ChainsSettings[chain.id].tokens
          )
        )
    )
    .reduce(
      (accumulated, current) =>
        new Set([...accumulated, ...current])
    );

  return [...tokensSet];
}

// Takes 0x4bBa290826C253BD854121346c370a9886d1bC26
// Returns 0x4bB..1bC26
export function shortenAddress(
  address: Hex
): Hex {
  return (address.slice(0, 5) +
    ".." +
    address.slice(address.length - 5)) as Hex;
}

export function chainInList(
  chain: Chain,
  list: Chain[]
): boolean {
  return list
    .map((chain) => chain.id)
    .includes(chain.id as any);
}

export function capitalize(text: string): string {
  if (text.length === 0) return "";
  if (text.length === 1)
    return text.charAt(0).toUpperCase();

  return (
    text.charAt(0).toUpperCase() + text.slice(1)
  );
}
