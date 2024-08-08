import React, { useState } from 'react'
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './itemDetail.css';

const ItemDetail = ({ item }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
        toast.success('¡Producto agregado exitosamente!',{
            hideProgressBar: true,
            className: 'my-custom-toast',
            position: 'bottom-right',
            autoClose: 3000
        });
    }



    return (
        <div>
            <div className='mt-5 mb-5 d-flex gap-5 justify-content-center contenedor-item-detail'>
                <div>
                    <img className='imagen-detail' src={item.img} alt={item.title} />
                </div>
                <div className='detalles-producto'>
                    <h3 translate='no'>{item.title}</h3>
                    <p className='text-secondary' ><strong>$ {item.price}</strong></p>
                    <p>{item.description}</p>
                    <p translate='no' className='p-detail'> Stock: <span>{item.stock}</span> </p>
                    <p className='p-detail'>Categoria: <span> {item.category} </span></p>
                    {item.stock <= 0 && <p className='sin-stock'>Sin stock disponible</p>}
                    <div className='mt-5 div-detail'>
                        {goToCart ? <Link to='/cart' className='link'>Ir al carrito</Link> : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}

                    </div>
                    <ToastContainer/>
                    
                </div>

            </div>

        </div>
    )
}

export default ItemDetail