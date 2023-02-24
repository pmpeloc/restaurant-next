import type { NextApiRequest, NextApiResponse } from 'next';
import { Categoria, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  categorias: Categoria[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categorias = await prisma.categoria.findMany();

  res.status(200).json({ categorias });
}
