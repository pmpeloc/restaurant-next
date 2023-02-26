import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Producto } from 'prisma/types';

const prisma = new PrismaClient();

export interface IProductosAxios {
  productos: Producto[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProductosAxios>
) {
  const productos = await prisma.producto.findMany();

  res.status(200).json({ productos });
}
