import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { getDebtPaid } from '../helpers/adamsPayHandler';

//contenedor del listado de los productos que se van a mostrar en el documento
const ItemListContainer = () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const parameters = {};

    for (const [key, value] of urlParams.entries()) {
      parameters[key] = value;
    }

    if(parameters.doc_id){
      getDebtPaid(parameters.doc_id);
    }

    const[productos, setProductos] = useState([]);
    const[titulo, setTitulo] = useState("Productos");

    useEffect(() => {      
      const productosRef = collection(db, "productos");
      
      getDocs(productosRef)
        .then( (resp) => {
          setProductos(
            resp.docs.map((doc) =>{              
              return { ...doc.data(), id: doc.id }
            })
          )
        });
    }, []);    
    
    return (
        <ItemList productos={productos} titulo={titulo}/>
    )
}

export default ItemListContainer;