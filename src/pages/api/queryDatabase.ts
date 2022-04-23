import { getHttpServer } from "@/helpers/httpServer";
import { ApiResponseInterface } from "@/types/http/api";
import { APP_CONFIGS } from "@/configs/app";

const API_URL = `databases/${APP_CONFIGS.DATABASE_ID}/query`
export async function queryDatabase(): Promise<ApiResponseInterface<any>> {
  const httpServer = await getHttpServer();

  const resp = await httpServer.post(API_URL)
  return resp.data;
}