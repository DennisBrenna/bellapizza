import React, { useState, useEffect } from "react";

//import components
import Footer from "../components/FooterCard";
import Header from "../components/Header";
import DividerHorizontal from "../components/DividerHorizontal";
import ProductCard from "../components/ProductCard";

//import dummydata
import {getProducts} from '../dummyData/menuData';

//import mui 
import { Grid } from "@mui/material";



function Menu(props) {

    const {amountOfItems, onAdd,} = props;

    
    const [filteredProducts, setFilteredProducts] = useState([])

    const [products, setProducts] = useState([])

    const [showFiltered, setShowFiltered] = useState(false)

    

    useEffect(() => {
        let response = getProducts()
        setProducts(response)
    }, [filteredProducts])

    const handleFilteredProducts = (dish) => {
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


    return(
     
        <>
        <Header amountOfItems={amountOfItems}/>
        <div class="menuFilter">
        <button className="linksInMenu" onClick={ (e) => handleShowFiltered(false) }>All</button>
        <button className="linksInMenu" onClick={ (e) => handleFilteredProducts(e.target.innerText) }>Pizza</button>
        <button className="linksInMenu" onClick={ (e) => handleFilteredProducts(e.target.innerText) }>Pasta</button>
        <button className="linksInMenu" onClick={ (e) => handleFilteredProducts(e.target.innerText) }>Drink</button>
        </div>
        <Grid  container rowSpacing={1} columnSpacing={4} width={ 900 } margin="auto" marginBottom="50px">
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