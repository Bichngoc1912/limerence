const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID ?? '';
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN ?? '';
const NOTION_VERSION = process.env.NEXT_PUBLIC_NOTION_VERSION ?? '2022-02-22';
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://limerence-ntbn.vercel.app/';
const BLUR_IMAGE_BASE64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0qQcAAQ0AxblT1HMAAAAASUVORK5CYII=';
const APP_ENV = process.env.NEXT_PUBLIC_ENV ?? 'production';
const APP_VERSION = process.env.NEXT_PUBLIC_VERSION ?? '';

export const APP_CONFIGS = {
  API_BASE_URL,
  DATABASE_ID,
  BEARER_TOKEN,
  NOTION_VERSION,
  API_URL,
  BLUR_IMAGE_BASE64,
  APP_ENV,
  APP_VERSION,
};
