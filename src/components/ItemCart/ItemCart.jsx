import React from 'react'
import { useCartContext } from '../Context/CartContext'
import './itemCart.css'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div>
            <div className='container-cart'>
                <img src={product.img} alt={product.name} />
                <div>
                    <p>Producto:</p>
                    <h4>{product.title}</h4>
                </div>
                <div>
                    <p>Cantidad:</p>
                    <p>{product.quantity}</p>
                </div>
                <div>
                    <p>Precio:</p>
                    <p>$ {product.price}</p>
                </div>
                <div>
                    <p>Subtotal</p>
                    <p>$ {product.quantity * product.price}</p>
                </div>
                <div>
                    <button onClick={() => removeProduct(product.id)}><i className="bi bi-trash"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart