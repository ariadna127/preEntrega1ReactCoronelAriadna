import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'
const ItemList = ({items}) => {
    return (
        <div className='d-flex flex-wrap gap-5 mt-5'>
            {items.map((item)=>
            <div key={item.id} className='div-item'>
                <Item item={item}/>
            </div>
            )}
        </div>
    )
}

export default ItemList