import { ApiResponseInterface } from '@/types/http/api';
import { getHttpClient } from "@/helpers/httpClient";

const BASE_URL = 'api/queryDatabase';

export async function getArticleList() {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(BASE_URL);

  return resp.data;
}
