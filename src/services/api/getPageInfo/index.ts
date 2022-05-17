import { getHttpClient } from '@/helpers/httpClient';
import { GetPageInfoResponseInterface, GetPageInfoRequestInterface } from './types';
import { APP_CONFIGS } from '@/configs/app';

const BASE_URL =
  APP_CONFIGS.APP_ENV === 'production' ? '/api/retrievePage' : 'retrievePage';

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
