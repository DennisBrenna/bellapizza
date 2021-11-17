import React from 'react';
import './App.css';

import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Footer from './components/FooterCard';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system';



//import { createTheme } from '@mui/material'
//import { amber, teal } from '@mui/material/colors';
//import { ThemeProvider } from '@mui/system';
//import { useEffect, useState } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import ProductCard from './components/ProductCard';

function App() {
  
  
  return (
  
  
    <Routes>
      <Route exact path='/' element={ <Home/>} />
      <Route path='/checkout' element={ <Checkout/>} />
      <Route path='/menu' element={ <Menu/>} />
      <Route path='/error' element={ <Error/>} /
    </Routes>
  

    
     
      
  );
}

export default App;
