import axios from 'axios';
import { HTTP_HEADER_KEY, HTTP_HEADER_VALUE } from '@/types/http/header';
import { APP_CONFIGS } from '@/configs/app';

const httpServer = axios.create({
  baseURL: APP_CONFIGS.API_BASE_URL,
  timeout: 30000,
  headers: {
    [HTTP_HEADER_KEY.CONTENT_TYPE]: HTTP_HEADER_VALUE.APPLICATION_JSON,
    [HTTP_HEADER_KEY.AUTHORIZATION]: HTTP_HEADER_VALUE.AUTHORIZATION_VALUE,
    [HTTP_HEADER_KEY.NOTION_VERSION]: HTTP_HEADER_VALUE.NOTION_VERSION_VALUE
  }
})

export function getHttpServer() {
  return httpServer;
}