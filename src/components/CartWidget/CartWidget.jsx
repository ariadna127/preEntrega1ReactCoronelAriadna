import React, {useEffect} from "react";
import { useCartContext } from "../Context/CartContext";


const CartWidget = () =>{
    const {totalProducts, cart} = useCartContext();

    return(
        <div className="cart">
            <i className="bi bi-cart-fill"></i>
            <span className="numerito text-danger">{ totalProducts() || cart }</span>
        </div>
    )
}

export default CartWidget