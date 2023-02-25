import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Categoria } from 'prisma/types';

const prisma = new PrismaClient();

export interface ICategoriaAxios {
  categorias: Categoria[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategoriaAxios>
) {
  const categorias = await prisma.categoria.findMany();

  res.status(200).json({ categorias });
}
