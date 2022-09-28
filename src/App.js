import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from  './components/Home/Home';


const categories = [
  {id:0,title: 'electronics',route: '/categoria/electronics'},
  {id:1,title: 'man clotes', route: '/categoria/man-clotes'},
  {id:2,title: 'decorations', route: '/categoria/decorations'},
  {id:3,title: 'jewelery', route: '/categoria/jewelery'}
]




const  App = () => {

  return (
  <>
  <BrowserRouter>
    <NavBar categories={categories}/>
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
