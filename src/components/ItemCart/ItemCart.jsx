import React from 'react'
import { useCartContext } from '../Context/CartContext'
import './itemCart.css'

const ItemCart = ({ product }) => {
    const { removeProduct, updateQuantity } = useCartContext();

    const decrease = () => {
        updateQuantity(product.id, product.quantity - 1)
    };

    const increase = () => {
        updateQuantity(product.id, product.quantity + 1)
    };


    return (
        <div className='container-cart'>
                <img src={product.img} alt={product.name} />
                <div className='detalles-productos-cart'>
                    <div>
                        <h4 className='title-itemCart'>{product.title}</h4>
                        <div className='div-quantity'>
                            <button disabled={product.quantity <= 1} onClick={decrease} >-</button>
                            <p>{product.quantity}</p>
                            <button disabled={product.quantity >= product.stock} onClick={increase}>+</button>
                        </div>
                    </div>
                    <div className='precio-eliminar'>
                        <button onClick={() => removeProduct(product.id)}><i className="bi bi-trash"></i></button>
                        <div>
                        <p>Subtotal</p>
                        <p>$ {product.quantity * product.price}</p>
                        </div>
                    </div>
                </div>


        </div>
    )
}

export default ItemCart