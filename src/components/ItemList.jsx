import React from "react";
import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {

  return (
    <div className="container">
        <h2 className="main-title">{toCapital(titulo)}</h2>

        <div className="productos">
            { productos.length > 0 ? (
                productos.map((prod) => <Item key={prod.id} item={prod} />)
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    </div>
  )
}

export default ItemList;
