import { ApiResponse } from '../models/Api';

const fetcher = async (url: string): Promise<ApiResponse> => {
  const res = await (await fetch(url)).json();
  return res;
};

export default fetcher;
