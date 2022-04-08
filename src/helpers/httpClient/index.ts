import axios from 'axios';
import { HTTP_HEADER_KEY, HTTP_HEADER_VALUE } from '@/types/http/header';
import { APP_CONFIGS } from '@/configs/app';

const httpClient = axios.create({
  baseURL: APP_CONFIGS.API_BASE_URL,
  timeout: 30000,
  headers: {
    [HTTP_HEADER_KEY.CONTENT_TYPE]: HTTP_HEADER_VALUE.APPLICATION_JSON
  }
})

export function getHttpClient() {
  return httpClient;
}