import { pages } from './mockData';
import { IApiResponse } from './types';

export const getPage = async (page: number): Promise<IApiResponse> => ({
  ok: true,
  result: pages[page - 1],
  error: null,
});
