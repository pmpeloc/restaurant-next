import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Categoria } from 'prisma/types';

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
