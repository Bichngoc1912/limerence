import { APP_CONFIGS } from '@/configs/app';

export const HTTP_HEADER_KEY = {
  AUTHORIZATION: 'authorization',
  CONTENT_TYPE: 'Content-Type',
  NOTION_VERSION: 'Notion-Version',
};

export const HTTP_HEADER_VALUE = {
  APPLICATION_JSON: 'application/json',
  URLENCODED: 'application/x-www-form-urlencoded',
  AUTHORIZATION_VALUE: `Bearer ${APP_CONFIGS.BEARER_TOKEN}`,
  NOTION_VERSION_VALUE: APP_CONFIGS.NOTION_VERSION,
};
