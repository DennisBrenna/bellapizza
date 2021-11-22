import React, { useState, useEffect } from "react";
import './App.css';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Menu from './pages/Menu';



//import { createTheme } from '@mui/material'
//import { amber, teal } from '@mui/material/colors';
//import { ThemeProvider } from '@mui/system';
//import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { Route, Routes} from 'react-router-dom';
import data from './data';
import PersonInformation from './pages/PersonInformation'

function App() {
  
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exists = cartItems.find(x => x.id === product.id);
    if(exists){
      setCartItems(cartItems.map(x => x.id === product.id ?{...exists, qty: exists.qty+1}:x
          ));
    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}])
    }
}

const onRemove = (product) => {
  const exists = cartItems.find(x => x.id === product.id);
  if(exists.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
      setCartItems(cartItems.map(x => x.id === product.id ?{...exists, qty: exists.qty-1}:x
          ));
  }

}
 
  return (  
  
    <Routes>
      <Route exact path='/' element={ <Home/>} />
      <Route  path='/checkout' element={ <Checkout products = {products} onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}/>} />
      <Route path='/menu' element={ <Menu onAdd={onAdd} cartItems={cartItems}/>} />
      <Route path="/personinformation" element={<PersonInformation/>} />
      <Route path='/error' element={ <Error/>} />
    </Routes> 
  );
}

export default App;
