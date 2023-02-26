import { ICategoriaAxios } from '@/pages/api/categorias';
import axios from 'axios';
import { Categoria } from 'prisma/types';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IQuiosco {
  categorias: Categoria[];
  categoriaActual: Categoria;
  handleClickCategoria: (id: number) => void;
}

export const QuioscoContext = createContext<IQuiosco>({} as IQuiosco);

interface Props {
  children: ReactNode;
}

export const QuioscoProvider = ({ children }: Props) => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaActual, setCategoriaActual] = useState<Categoria>({
    id: 0,
    icono: '',
    nombre: '',
    productos: [],
  });

  const obtenerCategorias = async () => {
    const {
      data: { categorias },
    } = await axios.get<ICategoriaAxios>('/api/categorias');

    setCategorias(categorias);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    if (categorias.length) {
      setCategoriaActual(categorias[0]);
    }
  }, [categorias]);

  const handleClickCategoria = (id: number) => {
    const categoria = categorias.find((cat) => cat.id === id);
    setCategoriaActual(categoria!);
  };

  return (
    <QuioscoContext.Provider
      value={{ categorias, categoriaActual, handleClickCategoria }}>
      {children}
    </QuioscoContext.Provider>
  );
};
