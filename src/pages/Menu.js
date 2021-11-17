import React from "react";
import ProductCard from '../components/ProductCard';
import Grid from '@mui/material/Grid';

function Menu() {

    return(

        <>
        <Grid container spacing={4} maxWidth={ 600 } margin="auto">
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="Inbakad med skinka"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="Inbakad med skinka"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="Inbakad med skinka"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="Inbakad med skinka"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="Inbakad med skinka"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Jason Special" description="Cheese, Salami, Mushrooms, Tomatoes, Olives"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="Inbakad med skinka"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="Inbakad med skinka"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="Inbakad med skinka"/>
            </Grid>
        </Grid>
        </>

    );

}

export default Menu;