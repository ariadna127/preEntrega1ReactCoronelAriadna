import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import productos from '../Json/productos.json'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(() => {
                resolve(productos.find((producto)=>producto.id === parseInt(id)));
            }, 1000);
        });
        promesa.then((producto)=>{
            setItem(producto)
        })
    }, [id])



    return (
        <div className='container'>
            <div className='row'>
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer