import React from 'react'
import Item from './Item';
import { toCapital } from '../helpers/toCapital';

//para listar items con título
const ItemList = ( {productos, titulo} )  => {
  return (
    <div className='container'>
        <h2 className='main-title'>{toCapital(titulo)}</h2>
        <div className="productos">
            { productos.map( (prod) => <h2 key={prod.id}> <Item producto={prod}/> </h2>) }
        </div>
    </div>
  )
}

export default ItemList;