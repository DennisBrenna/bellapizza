import React, { useState, useEffect } from "react";
import './App.css';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Menu from './pages/Menu';
import  useMediaQuery  from '@material-ui/core/useMediaQuery'
import { useTheme } from "@material-ui/core/styles";
import ModalHeader from './components/ModalHeader'


//import { createTheme } from '@mui/material'
//import { amber, teal } from '@mui/material/colors';
//import { ThemeProvider } from '@mui/system';
//import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { Route, Routes} from 'react-router-dom';
import data from './data';
import { Grid } from "@mui/material";
import {makeStyles} from "@material-ui/core";
import CartDropDown from "./components/CartDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%"
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  console.log(matches);

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
 
  const amountOfItems = cartItems.reduce((a, c) => a +  c.qty, 0);
  return (
    <Grid
    className={classes.root}
    containerjustify="center"
    alignItems="center"
  >
    <Routes>
      <Route exact path='/' element={ <Home amountOfItems={amountOfItems}/>} />
      <Route  path='/checkout' element={ <Checkout products = {products} onAdd={onAdd} amountOfItems={amountOfItems}  cartItems={cartItems} onRemove={onRemove}/>} />
      <Route path='/menu' element={ <Menu onAdd={onAdd} amountOfItems={amountOfItems}/>} />
      <Route path='/error' element={ <Error/>} />
    
    </Routes> 
    <ModalHeader cartItems={cartItems}/>
    </Grid>
  );
}

export default App;
