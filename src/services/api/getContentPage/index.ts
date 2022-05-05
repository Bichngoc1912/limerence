import { getHttpClient } from '@/helpers/httpClient';
import { GetContentPageRequestInterface, GetContentPageResponseInterface } from './types';

const BASE_URL = 'retrieveBlockChildren';

export async function getContentPage(req: GetContentPageRequestInterface): Promise<GetContentPageResponseInterface> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(BASE_URL, { params: req });

  try {
    return await resp.data;
  } catch (err) {
    return Promise.reject(err);
  }
}

export * from './types';