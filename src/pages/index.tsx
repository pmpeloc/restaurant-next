import { Categoria, PrismaClient } from '@prisma/client';

interface Props {
  categorias: Categoria[];
}

export default function Home({ categorias }: Props) {
  console.table(categorias);
  return <h1>Hola</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  return { props: { categorias } };
};
