import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { agregarProducto, enCarrito } = useCart();
    const navigate = useNavigate();

    if (!item) {
        return <div>Loading...</div>;
    }

    const handleClick = () => {
        if (!enCarrito(item.id)) {
            agregarProducto(item);
            navigate('/carrito');
        }
    };

    return (
        <div className="producto-card">
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
            <p className="precio">Precio: ${item.precio}</p>
            <p>Categoría: {item.categoria}</p>
            <img src={item.imagen} alt={item.titulo} />
            <button onClick={handleClick} disabled={enCarrito(item.id)}>
                {enCarrito(item.id) ? 'Producto en el carrito' : 'Agregar al carrito'}
            </button>
        </div>
    );
};

export default Item;
