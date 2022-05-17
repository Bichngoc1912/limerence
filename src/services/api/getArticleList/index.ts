import { getHttpClient } from '@/helpers/httpClient';
import { APP_CONFIGS } from '@/configs/app';

const BASE_URL = APP_CONFIGS.APP_ENV === 'production' ?  '/api/queryDatabase' : '/queryDatabase'

export async function getArticleList(req?: any) {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(BASE_URL, req);

  try {
    return await resp.data;
  } catch (err) {
    return Promise.reject(err);
  }
}
