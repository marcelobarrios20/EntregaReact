import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { carrito, limpiarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Datos del formulario:", data);
      console.log("Contenido del carrito:", carrito);

      const order = {
        cliente: {
          nombre: data.nombre || "",
          email: data.email || "",
          telefono: data.telefono || "",
        },
        productos: carrito.map((item) => ({
          id: item.id || "",
          titulo: item.titulo || "",
          precio: item.precio || 0,
          cantidad: item.cantidad || 1,
        })),
        total: carrito.reduce(
          (total, item) => total + (item.precio || 0) * (item.cantidad || 1),
          0
        ),
        fecha: new Date().toISOString(),
      };

      const docRef = await addDoc(collection(db, "pedidos"), order);
      console.log("Documento escrito con ID: ", docRef.id);

      limpiarCarrito();
      setIsSubmitted(true);
    } catch (e) {
      console.error("Error al agregar el documento: ", e);
    }
  };

  return (
    <div className="checkout-container">
      {isSubmitted ? (
        <div className="thank-you-message">
          <h2>¡Muchas gracias por realizar tu compra!</h2>
          <p>
            Te enviaremos un correo electrónico con los detalles de tu pedido.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Finalizar compra</h2>
          <div>
            <input
              type="text"
              placeholder="Ingresá tu nombre"
              {...register("nombre", { required: true })}
              className="checkout-input"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Ingresá tu e-mail"
              {...register("email", { required: true })}
              className="checkout-input"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Ingresá tu teléfono"
              {...register("telefono", { required: true })}
              className="checkout-input"
            />
          </div>
          <button type="submit" className="checkout-button">
            Comprar
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
