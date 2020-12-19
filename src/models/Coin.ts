export interface Coin {
  '24hVolume': string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: number[];
  symbol: string;
  tier: number;
  uuid: string;
}

export enum Coins {
  bitcoin = 'BTC',
  ethereum = 'ETH',
  chain_link = 'LINK',
  yearn_finance = 'YFI',
  xrp = 'XRP',
  litecoin = 'LTC',
  bitcoin_cash = 'BCH',
  civic = 'CVC',
}

export interface CoinsData {
  [key: string]: Coin;
}
