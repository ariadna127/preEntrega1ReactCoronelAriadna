import React from "react";

const CartWidget = () =>{
    return(
        <div className="cart">
            <i className="bi bi-cart-fill"></i>
            <span className="numerito text-danger">0</span>
        </div>
    )
}

export default CartWidget