import { getHttpServer } from '@/helpers/httpServer';
import type { NextApiRequest, NextApiResponse } from 'next';

const generateApiUrl = (param: string) => {
  return `/pages/${param}`;
}

export default async function retrievePage(
  req: NextApiRequest,
  res: NextApiResponse<any>,
): Promise<any> {
  const httpServer = await getHttpServer();

  const pageId = req.query.page_id as string;
  const resp = await httpServer.get(generateApiUrl(pageId));
  try {
    return res.status(200).json(resp.data);
  } catch (err) {
    return res.status(500).json(err);
  }
}
