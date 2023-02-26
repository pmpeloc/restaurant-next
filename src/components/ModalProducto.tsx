import { useQuiosco } from '@/hooks/useQuiosco';
import Image from 'next/image';
import { formatearDinero } from '@/helpers';
import { CloseIcon } from './CloseIcon';

export const ModalProducto = () => {
  const { producto, handleOpenModal } = useQuiosco();
  return (
    <div className='md:flex gap-10'>
      <div className='md:w-1/3'>
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>
      <div className='md:w-2/3'>
        <div className='flex justify-end'>
          <button onClick={() => handleOpenModal()}>
            <CloseIcon />
          </button>
        </div>
        <h1 className='text-3xl font-bold mt-5'>{producto.nombre}</h1>
        <p className='mt-5 font-black text-5xl text-amber-500'>
          {formatearDinero(producto.precio)}
        </p>
      </div>
    </div>
  );
};
