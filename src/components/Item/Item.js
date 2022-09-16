
import imgBolsas from '../../imagenes/bolsas.JPG'
import React from 'react';
import './Item.css';


// { id, title, price, pictureUrl }
const item = [
    {id:1, title: "somprero",stock:5,price: 500},
    {id:2,title: "Aros",stock:0,price: 500},
    {id:3,title: "Almohadon",stock:0,price: 500}
                  ]

const Item = (item) => {  //Este componente recibe un objeto item para extraer de el la info a mostrar en una card
    

return(
 

    <div className="card">
        <img altclassname="Esto es una bolsa" className="imgCard" src={imgBolsas} alt=''  />
        <div className="container">
            <p>Title:{item.title}</p>
          <p>Price:{item.price}</p>
        </div>
        </div>
    
) 

}

export default Item