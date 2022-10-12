import React from 'react';   
//import {products} from '../../Assets/productos' //Traigo los productos a mostrar desde este archivo
import {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


//Este componente va a listar los items

const ItemListContainer = ({greeting}) => {  //Este componente recibe la prop "greeting y la muestra con h1"
 //Los productos se deben guardar en un estado, para esto se usa el useState
 //Agregar  llamado a  <ItemList/> mediante una promesa con retraso de 2 segundos+ useEffect


   
const { id } = useParams();   //Esto provoca que el componente sepa que traer, segun la categoria
const [products,setProducts]  = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false);

 

//const URL_CATEGORY = 'https://fakestoreapi.com/products/category/'
//const BASE = 'https://fakestoreapi.com/products'


useEffect(() => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", "jewelery"));

    getDocs(productsCollection)
      .then((data) => {
        const lista = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(lista);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);


    return (
    <>
       <h1>{greeting}</h1>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h1>Ocurrio un error</h1>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

const styles = {
  dash: {
    textAlign: 'center'
  }
}


export default ItemListContainer  