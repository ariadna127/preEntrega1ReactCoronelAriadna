import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../Json/productos.json";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(id ? productos.filter((producto) => producto.category === id) : productos)
                    }, 1500);
                });
                setItems(data)
            } catch (error) {
                console.log("Error", error);
            }
        }
        fetchData()
    }, [id])


    return (
        <div>
            {!id ? (
                <div>
                    <div className="contenedor-title">
                        <h2 className="title">{greeting}</h2>
                    </div>
                    <h3 className="text-center m-4">TODOS LOS PRODUCTOS</h3>
                </div>

            ) : (items && items.length > 0 && (
                <h3 className="text-center m-4 text-uppercase">{items[0].category}</h3>
            )) }
            <div className="container">
                <div>
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer