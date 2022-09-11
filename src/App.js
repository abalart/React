import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const  App = () => {
  return (
  <>
    <NavBar />
    <ItemListContainer greeting={"Aqui vamos a agregar el catálogo"}/>
    <ItemCount/>
  </> 
  );
}

export default App;
