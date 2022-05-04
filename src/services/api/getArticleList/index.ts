import { getHttpClient } from '@/helpers/httpClient';

const BASE_URL = 'queryDatabase';

export async function getArticleList(req?: any) {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(BASE_URL, req);

  try {
    return await resp.data;
  } catch (err) {
    return Promise.reject(err);
  }
}
