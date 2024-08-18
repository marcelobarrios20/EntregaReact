import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { carrito } = useCart();

    return (
        <Link to="/carrito">
            <div>
                🛒 Carrito ({carrito.length})
            </div>
        </Link>
    );
};

export default CartWidget;
