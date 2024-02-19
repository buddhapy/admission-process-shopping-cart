import React from 'react'
import { Link } from 'react-router-dom';

const Item = ( {producto} ) => {
  return (
    <div className='producto'>
        <img src={producto.imagen} alt={producto.titulo}/>
        <div>
            <h4>{producto.label}</h4>
            <p>Descripción: {producto.description}</p>
            <p>Gs. {producto.amount.value}</p>            
            <Link className='ver-mas' to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item;