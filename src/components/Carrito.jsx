import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
    const { carrito, quitarProducto, limpiarCarrito } = useCart();
    const navigate = useNavigate();

    const handleFinalizarCompra = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Carrito de Compras</h2>
            <ul>
                {carrito.map(producto => (
                    <li key={producto.id} className="cart-item">
                        <p>{producto.titulo} - <span className="cart-item-price">${producto.precio}</span></p>
                        <div className="btn-container">
                            <button onClick={() => quitarProducto(producto.id)} className="btn-quitar">
                                Quitar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="cart-total">Total: ${carrito.reduce((total, producto) => total + producto.precio, 0)}</p>
            {carrito.length > 0 && (
                <div className="btn-finalizar-container">
                    <button onClick={handleFinalizarCompra} className="btn-finalizar">
                        Finalizar Compra
                    </button>
                    <button onClick={limpiarCarrito} className="btn-quitar">
                        Vaciar Carrito
                    </button>
                </div>
            )}
        </div>
    );
};

export default Carrito;
