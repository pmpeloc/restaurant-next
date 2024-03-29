import { ICategoriaAxios } from '@/pages/api/categorias';
import axios from 'axios';
import { Categoria, Producto } from 'prisma/types';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IQuiosco {
  categorias: Categoria[];
  categoriaActual: Categoria;
  producto: Producto;
  isOpenModal: boolean;
  handleClickCategoria: (id: number) => void;
  handleSetProducto: (producto: Producto) => void;
  handleOpenModal: () => void;
  handleAgregarPedido: (pedido: Pedido) => void;
}

export const QuioscoContext = createContext<IQuiosco>({} as IQuiosco);

interface Props {
  children: ReactNode;
}

interface Pedido {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

export const QuioscoProvider = ({ children }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaActual, setCategoriaActual] = useState<Categoria>({
    id: 0,
    icono: '',
    nombre: '',
    productos: [],
  });
  const [producto, setProducto] = useState<Producto>({
    id: 0,
    categoriaId: 0,
    imagen: '',
    nombre: '',
    precio: 0,
  });
  const [pedido, setPedido] = useState<Pedido[]>([]);

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

  const handleClickCategoria = (id: number): void => {
    const categoria = categorias.find((cat) => cat.id === id);
    setCategoriaActual(categoria!);
  };

  const handleSetProducto = (producto: Producto): void => {
    setProducto(producto);
  };

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleAgregarPedido = (nuevoPedido: Pedido) => {
    if (pedido.some((p) => p.id === nuevoPedido.id)) {
      const pedidoActualizado = pedido.map((p) =>
        p.id === nuevoPedido.id ? nuevoPedido : p
      );
      setPedido(pedidoActualizado);
    } else {
      setPedido([...pedido, nuevoPedido]);
    }
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        producto,
        isOpenModal,
        handleClickCategoria,
        handleSetProducto,
        handleOpenModal,
        handleAgregarPedido,
      }}>
      {children}
    </QuioscoContext.Provider>
  );
};
