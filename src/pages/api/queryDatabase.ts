import { getHttpServer } from '@/helpers/httpServer';
import { APP_CONFIGS } from '@/configs/app';
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = `databases/${APP_CONFIGS.DATABASE_ID}/query`;

export default async function queryDatabase(
  req: NextApiRequest,
  res: NextApiResponse<any>,
): Promise<any> {
  const httpServer = await getHttpServer();

  const resp = await httpServer.post(API_URL, req.body);
  console.log(".......", resp.headers)
  try {
    res.status(200).json(resp.data);
  } catch (err) {
    res.status(500).json(err);
  }
}
