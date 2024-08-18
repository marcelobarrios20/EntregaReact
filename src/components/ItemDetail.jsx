import React from 'react';
import { toCapital } from './toCapital';

const ItemDetail = ({ producto }) => {
  if (!producto) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{toCapital(producto.titulo || 'Título desconocido')}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <img src={producto.imagen} alt={producto.titulo} />
    </div>
  );
};

export default ItemDetail;
