import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'
import './itemListContainer.css'


const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'products');

        if (id) {
            const queryFilter = query(queryCollection, where('category', '==', id));
            getDocs(queryFilter).then((res)=>{
                console.log(res.docs);  
                setItems(res.docs.map((p) => ({ id: p.id, ...p.data() })));
            });
            
        } else{
            getDocs(queryCollection).then((res)=>
            setItems(res.docs.map((p)=>({id: p.id, ...p.data()})))
            );
        }
        
    }, [id])


    return (
        <div>
            {!id ? (
                <div>
                    <div className="contenedor-title">
                        <h2 className="title">{greeting}</h2>
                    </div>
                </div>

            ) : (items && items.length > 0 && (
                <h3 className="text-center m-4 title-categ">{items[0].category}</h3>
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