import React from 'react';
import './App.css';

import Footer from './components/FooterCard';
import Home from './pages/Home';
import Menu from './pages/Menu';



//import { createTheme } from '@mui/material'
//import { amber, teal } from '@mui/material/colors';
//import { ThemeProvider } from '@mui/system';
//import { useEffect, useState } from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Home/>
      <Menu/>
      </div>
      
  );
}

export default App;
