import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // Añadido para manejar el estado de carga
    const [titulo, setTitulo] = useState("Productos");

    const categoria = useParams().categoria;

    useEffect(() => {
      const productosRef = collection(db, "products");
      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

      getDocs(q)
        .then((resp) => {
          setProductos(
            resp.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
            }))
          );
          setLoading(false); // Desactiva el estado de carga después de obtener los datos
        })
        .catch((error) => {
          console.error("Error al obtener los productos: ", error);
          setLoading(false); // Asegura que se desactiva el estado de carga en caso de error
        });
    }, [categoria]);

    if (loading) {
        return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los productos
    }

  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer;
