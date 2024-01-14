import React from 'react';
import Item from '../Item/Item';
import './itemList.css'
const ItemList = ({items}) => {
    return (
        <div className='contenedor-items'>
            {items.map((item)=>
            <div key={item.id} className='div-item'>
                <Item item={item}/>
            </div>
            )}
        </div>
    )
}

export default ItemList
// className='d-flex justify-content-center flex-wrap gap-5 mt-5 mb-5'