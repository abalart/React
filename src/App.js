import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const  App = () => {
  return (
  <>
    <NavBar />
    <ItemListContainer greeting={"Aqui vamos a agregar el catálogo"}/>
  </> 
  );
}

export default App;
