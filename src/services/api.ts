import { createImportSpecifier } from 'typescript';
import { Coin, Coins } from '../models/Coin';
const api_key: string = `6d8150b40f839552ca08032ec746c4d2fea2948e27a0d28226b5c088c1f8a047`;

export const getSingleSymbolPrice = async (symbol: Coins): Promise<Coin> => {
  let apiURL: string = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,EUR&api_key=${api_key}`;
  let data = await (await fetch(apiURL)).json();
  return data;
};

export const getMultipleSymbolsPrice = async (
  symbols: Coins[]
): Promise<Record<Coins, Coin>> => {
  let apiURL: string = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols}&tsyms=USD,EUR&api_key=${api_key}`;
  let data = await (await fetch(apiURL)).json();

  return data;
};
