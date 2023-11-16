import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="contenedor-item">
            <h2 className="title">{greeting}</h2>
        </div>
    )
}

export default ItemListContainer