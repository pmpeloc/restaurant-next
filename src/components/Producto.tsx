import { formatearDinero } from '@/helpers';
import Image from 'next/image';
import { Producto as IProducto } from 'prisma/types';

interface Props {
  producto: IProducto;
}

export const Producto = ({ producto }: Props) => {
  const { nombre, imagen, precio } = producto;

  return (
    <div className='border p-3'>
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen ${nombre}`}
        width={400}
        height={500}
      />
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{nombre}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          {formatearDinero(precio)}
        </p>
      </div>
    </div>
  );
};
