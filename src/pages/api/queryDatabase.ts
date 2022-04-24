import { getHttpServer } from "@/helpers/httpServer";
import { APP_CONFIGS } from "@/configs/app";

const API_URL = `databases/${APP_CONFIGS.DATABASE_ID}/query`

export async function queryDatabase(): Promise<any> {
  const httpServer = await getHttpServer();

  const resp = await httpServer.post(API_URL)
  try {
    return resp.data;
  } catch(err) {
    console.log("err catch...", err)
    return err;
  }
}