const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID ?? '';
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN ?? '';
const NOTION_VERSION = process.env.NEXT_PUBLIC_NOTION_VERSION ?? '2022-02-22'
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'

export const APP_CONFIGS = {
  API_BASE_URL,
  DATABASE_ID,
  BEARER_TOKEN,
  NOTION_VERSION,
  API_URL
}