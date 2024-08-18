import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga
    const { id } = useParams(); // Destructuring para obtener el id

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const docRef = doc(db, "products", id); // Cambiado de "productos" a "products"
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No se encontró el producto");
                }
            } catch (error) {
                console.error("Error al obtener el producto: ", error);
            } finally {
                setLoading(false); // Finaliza la carga sin importar el resultado
            }
        };

        fetchItem();
    }, [id]);

    if (loading) return <div>Cargando...</div>;

    return (
        <div>
            {item ? <ItemDetail item={item} /> : <div>No se encontró el producto</div>}
        </div>
    );
};

export default ItemDetailContainer;
