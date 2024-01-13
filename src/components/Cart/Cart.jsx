import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import './cart.css'


const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();


    if (cart.length === 0) {
        return (
            <div className='cart-vacio'>
                <p>No hay productos en el carrito</p>
                <Link className='linkkk' to='/'>Hacer compras</Link>
            </div>
        );
    }

    return (
        <div className='cartt'>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}

            <div className='extras'>
                <button onClick={clearCart}>Vaciar carrito</button>
                <div>
                    <p>Total:  <span>$ {totalPrice()}</span> </p>
                    <Link to='/checkout'>
                        {''}
                        <button>Finalizar Compra</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Cart