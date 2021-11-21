import React, { useState, useEffect } from "react";
import Footer from "../components/FooterCard";
import MenuCard from "../components/MenuCard";
import Header from "../components/Header";
import DividerHorizontal from "../components/DividerHorizontal";
import pizza from '../images/Pizza.png';
import soda from '../images/Soda.png';
import pasta from '../images/Pasta.png';
import {getProducts} from '../dummyData/menuData';
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";


function Menu() {

    
    const [filteredProducts, setFilteredProducts] = useState([])

    const [products, setProducts] = useState([])

    const [showFiltered, setShowFiltered] = useState(false)

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

    useEffect(() => {
        let response = getProducts()
        setProducts(response)
    }, [filteredProducts])

    const handleFilteredProducts = (dish) => {
        console.log(dish)
        const result = products.filter(product => { 
            if( dish === product.dish) {
                return product
            }
         })
         setFilteredProducts(result)
         handleShowFiltered(true)
    }

    const handleShowFiltered = ( boolean ) => {
        setShowFiltered((prevState) => boolean) 
    }

    //Shoppingcart
    const [cartItems, setCartItems] = useState([]);

    return(
     
        <>
        <Header countCartItems={cartItems.length}/>
        <div class="allLinks">
        <button className="linksInMenu" onClick={ (e) => handleShowFiltered(false) }>All</button>
        <button className="linksInMenu" onClick={ (e) => handleFilteredProducts(e.target.innerText) }>Pizza</button>
        <button className="linksInMenu" onClick={ (e) => handleFilteredProducts(e.target.innerText) }>Pasta</button>
        <button className="linksInMenu" onClick={ (e) => handleFilteredProducts(e.target.innerText) }>Drink</button>
        </div>
        <Grid container rowSpacing={1} columnSpacing={4} width={ 900 } margin="auto" marginBottom="50px">
            { showFiltered? filteredProducts.map(product => {
                return( <Grid item key={ product.id } xs={3}>
                <ProductCard onAdd={onAdd} product={product}/>
            </Grid> ) 
            }) :  products.map(product => {
                return( <Grid item key={ product.id } xs={3}>
                <ProductCard onAdd={onAdd} product={product}/>
            </Grid> ) 
            }) }
        </Grid>
        <DividerHorizontal/><br/><br/>
        <Footer/>
        </> 
    );

}

export default Menu;