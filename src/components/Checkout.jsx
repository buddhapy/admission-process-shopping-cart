import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { newDateFormatter, generateDebt } from '../helpers/adamsPayHandler';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");
    const [total, setTotal] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();
    
    const comprar = (data) => {
        const pedido = {
            cliente : data,
            productos : carrito,
            total : precioTotal()
        }
        console.log(pedido);
        setTotal(pedido.total);

        const pedidosRef = collection(db, "pedidos");
        
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);                                
                vaciarCarrito();
            });        
    }
    
    if(pedidoId) {
        const debt = {
            "debt": {
                "docId": pedidoId,
                "amount": {
                    "currency": "PYG",
                    "value": total
                },
                "label": "Pedido " + pedidoId,
                "validPeriod": {
                    "start": newDateFormatter(false),
                    "end": newDateFormatter(true)
                }
            }
        };
        generateDebt(debt);
        return (
            <div className="container">
                <h2 className="main-title">Muchas gracias por tu compra!</h2><br/>
                <p>Tu n&uacute;mero de pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>

            <input type='text' placeholder='Ingresá tu nombre' {...register('nombre')} />
            <input type='email' placeholder='Ingresá tu e-mail' {...register('email')} />            
            <input type='phone' placeholder='Ingresá tu teléfono' {...register('telefono')} />

            <button className='enviar' type='submit'>Comprar</button>
        </form>
    </div>
    )
}

export default Checkout;