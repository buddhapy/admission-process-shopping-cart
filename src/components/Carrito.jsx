import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='container'>
            <h2 className="main-title">Carrito</h2>
            {
                carrito.map((prod) => { 
                    return (
                        <div key={prod.id}>
                            <br/>
                            <h3>{prod.label}</h3>
                            <p>Gs. {prod.amount.value}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                            <p>Total: Gs. {prod.amount.value * prod.cantidad}</p>
                        </div>
                    )
                })
            }
            <br/>
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio total: Gs. {precioTotal()}</h2>
                    <button className='enviar' onClick={handleVaciar}>Vaciar</button>
                    <Link to="/checkout">
                        <button className='enviar'>Finalizar compra</button>
                    </Link>
                    
                </> : 
                <h3>El carrito est&aacute; vac&iacute;o :(</h3>
            }
            
        </div>
    )
}

export default Carrito;