export type Categoria = {
  id: number;
  nombre: string;
  icono: string;
  productos: Producto[];
};

export type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoriaId: number;
};
