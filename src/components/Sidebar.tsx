import { useQuiosco } from '@/hooks/useQuiosco';
import Image from 'next/image';
import { Categoria } from './Categoria';

export const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <>
      <Image
        width={300}
        height={100}
        src='/assets/img/logo.svg'
        alt='Logotipo'
      />
      <nav className='mt-10'>
        {categorias.map((categoria: any) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};
