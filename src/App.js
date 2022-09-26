import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Cart} from  './components/Cart/Cart';



const  App = () => {

  return (
  <>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemDetailContainer />} />
      <Route path='categoria/:IdCategria' element={<ItemListContainer />}/>
      <Route path='producto/:IdProducto' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </BrowserRouter>
  </> 
  );
}

export default App;
