import { getHttpClient } from "@/helpers/httpClient";

const BASE_URL = 'queryDatabase';

export async function getArticleList() {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(BASE_URL);
  
  try{
    return await resp.data;
  }catch(err) {
    return Promise.reject(err)
  }
}
