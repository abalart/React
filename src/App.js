import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from  './components/Home/Home';



const  App = () => {

  return (
  <>
  <BrowserRouter>
    <NavBar />
       <Routes>
          <Route path='/' element={<ItemListContainer  />}/>
          <Route path='/category/:id' element={<ItemListContainer   />}/>
          <Route path='/product/:id' element={ <ItemDetailContainer />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </BrowserRouter>
  </> 
  );
}

export default App;
