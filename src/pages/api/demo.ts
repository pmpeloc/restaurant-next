import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ text: string }>
) {
  res.status(200).json({ text: 'hola' });
}
