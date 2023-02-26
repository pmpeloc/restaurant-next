import prisma from 'lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Categoria } from 'prisma/types';

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
