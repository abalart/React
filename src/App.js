import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';

const  App = () => {

  return (
  <>
    <NavBar />
    
    <ItemDetailContainer/>
  </> 
  );
}

export default App;
