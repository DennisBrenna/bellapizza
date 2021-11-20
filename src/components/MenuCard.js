import React from "react";
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import Grid from '@mui/material/Grid';

function MenuCard({ products }) {

    return(
    <>
        <Grid container rowSpacing={1} columnSpacing={4} width={ 900 } margin="auto" marginBottom="50px">
            { products.map(product => {
                return( <Grid item key={ product.id } xs={3}>
                <ProductCard title={ product.title } description={ product.description } dish={ product.dish } image={ product.image } price={ product.price }/>
            </Grid> ) 
            }) }
        </Grid>
        </>
    );
}

export default MenuCard;