import { baseURL } from '../config/api';
import useSWR from 'swr';
import { ApiHookResponse } from '../models/Api';
import fetcher from '../utils/fetcher';

// https://developers.coinranking.com/api/documentation/coins#get-coins
export const useCoins = (): ApiHookResponse => {
  let { data, error } = useSWR(`${baseURL}/coins`, fetcher);
  return {
    data: data!,
    error: error,
    isLoading: !error && !data,
    isError: error,
  };
};
