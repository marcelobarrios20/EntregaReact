import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setCarrito((prevCarrito) => [...prevCarrito, producto]);
    };

    const quitarProducto = (id) => {
        setCarrito((prevCarrito) => prevCarrito.filter(producto => producto.id !== id));
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    const enCarrito = (id) => {
        return carrito.some(producto => producto.id === id);
    };

    return (
        <CartContext.Provider value={{ carrito, agregarProducto, quitarProducto, limpiarCarrito, enCarrito }}>
            {children}
        </CartContext.Provider>
    );
};
