import { getHttpClient } from '@/helpers/httpClient';
import { GetPageInfoResponseInterface, GetPageInfoRequestInterface } from './types';

const BASE_URL = 'retrievePage';

export async function getPageInfo(
  req: GetPageInfoRequestInterface,
): Promise<GetPageInfoResponseInterface> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(BASE_URL, { params: req });

  try {
    return await resp.data;
  } catch (err) {
    return Promise.reject(err);
  }
}

export * from './types';
