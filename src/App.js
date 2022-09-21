import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';

const  App = () => {

  return (
  <>
    <NavBar />
    <ItemListContainer/>  
  </> 
  );
}

export default App;
