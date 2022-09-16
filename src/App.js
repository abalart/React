import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';

const  App = () => {

  return (
  <>
    <NavBar />
    <ItemListContainer/>
    <Item/>
  </> 
  );
}

export default App;
