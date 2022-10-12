import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import ItemDetail  from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {  //Este componente le pasa a ItemDetails la info de productos por medio del estado SetProducto,
    //Primero se obtiene data  del fetch y luego se setea con SetProducto


  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


useEffect(() => {
    const productCollection = collection(db, "products");
    const refDoc = doc(productCollection, id);
    getDoc(refDoc)
      .then((result) => {
        setProduct({
          id: result.id,
          ...result.data(),
        });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);



return(
    
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h1>Ocurrio un error</h1>
      ) : (
        <ItemDetail producto={product} />
      )}
    </>
) 

}

export default ItemDetailContainer


