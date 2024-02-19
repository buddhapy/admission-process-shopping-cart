import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext';

const ItemDetail = ( {item} ) => {  

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => (cantidad > 1) ? setCantidad(cantidad - 1 ) : setCantidad(1);

  const handleSumar = () => cantidad < item.stock && setCantidad(cantidad + 1 );

  return (
    <div className='container'>
        <div className='producto-detalle'>
            <img src={item.imagen} alt={item.label} />
            <div>
              <h3 className="titulo">{item.label}</h3>
              <p className="descripcion">{item.description}</p>              
              <p className="precio">Gs. {item.amount.value}</p>
              <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={ () => agregarAlCarrito(item, cantidad)}/>
            </div>                        
        </div>
    </div>
  )
}

export default ItemDetail;