import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const  App = () => {

function onAdd(){

  console.log("Producto agregado")
}

  return (
  <>
    <NavBar />
    <ItemCount stock={5} initial={1} onAdd={onAdd} />
    <ItemListContainer/>
  </> 
  );
}

export default App;
