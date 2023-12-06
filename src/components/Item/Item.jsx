import React from 'react';
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({item}) => {
    return (
        <Link to={'/item/' + item.id} className='text-decoration-none'>
            <div className='container'>
                <div className='item'>
                    <img className='imagen-item' src={item.img} alt={item.name}/>
                    <div className='div-texto text-center'>
                        <p>{item.name}</p>
                        <p>$ {item.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item