import { ICategoriaAxios } from '@/pages/api/categorias';
import axios from 'axios';
import { Categoria } from 'prisma/types';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IQuiosco {
  categorias: Categoria[];
}

export const QuioscoContext = createContext<IQuiosco>({} as IQuiosco);

interface Props {
  children: ReactNode;
}

export const QuioscoProvider = ({ children }: Props) => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const obtenerCategorias = async () => {
    const {
      data: { categorias },
    } = await axios.get<ICategoriaAxios>('/api/categorias');

    setCategorias(categorias);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <QuioscoContext.Provider value={{ categorias }}>
      {children}
    </QuioscoContext.Provider>
  );
};
