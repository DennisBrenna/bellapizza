import React from 'react';
import './App.css';

import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Footer from './components/FooterCard';
import Home from './pages/Home';
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system';
import Menu from './pages/Menu';
import Locations from "./pages/Locations"



//import { createTheme } from '@mui/material'
//import { amber, teal } from '@mui/material/colors';
//import { ThemeProvider } from '@mui/system';
//import { useEffect, useState } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import data from './data';

function App() {
  
  const {products} = data;



  return (
  
  
    <Routes>
      <Route exact path='/' element={ <Home/>} />
      <Route  path='/checkout' element={ <Checkout products = {products}/>} />
      <Route path='/menu' element={ <Menu/>} />
      <Route path="/locations" element={<Locations/>} />
      <Route path='/error' element={ <Error/>} />
    </Routes> 
  );
}

export default App;
