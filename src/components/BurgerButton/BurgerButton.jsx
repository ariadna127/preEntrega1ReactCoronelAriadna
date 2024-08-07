import React from 'react'
import './burgerButton.css'

const BurgerButton = (props) => {
    return (
        <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerButton