import React from 'react';
import './App.css';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Menu from './pages/Menu';
<<<<<<< HEAD



//import { createTheme } from '@mui/material'
//import { amber, teal } from '@mui/material/colors';
//import { ThemeProvider } from '@mui/system';
//import { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import ProductCard from './components/ProductCard';
=======
import { Route, Routes} from 'react-router-dom';
>>>>>>> 5faa27c74d3737946c3ee0e45c197ab6fe9f9663
import data from './data';
import PersonInformation from './pages/PersonInformation'

function App() {
  
  const {products} = data;

 
  return (  
  
    <Routes>
      <Route exact path='/' element={ <Home/>} />
      <Route  path='/checkout' element={ <Checkout products = {products}/>} />
      <Route path='/menu' element={ <Menu/>} />
      <Route path="/personinformation" element={<PersonInformation/>} />
      <Route path='/error' element={ <Error/>} />
    </Routes> 
  );
}

export default App;
