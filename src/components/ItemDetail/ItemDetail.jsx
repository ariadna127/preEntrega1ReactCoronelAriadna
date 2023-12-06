import React from 'react'
import './itemDetail.css'
const ItemDetail = ({ item }) => {
    return (
        <div className='row'>
            <div className='mt-5 mb-5 d-flex gap-5 justify-content-center'>
                <div>
                    <img className='imagen-detail' src={item.img} alt={item.name} />
                </div>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>$ {item.price}</p>
                    <p> Cantidad: {item.stock}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail