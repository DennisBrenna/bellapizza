import React from "react";
import ProductCard from '../components/ProductCard';
import Grid from '@mui/material/Grid';
import Footer from '../components/FooterCard';

function Menu() {

    return(

        <>
        <Grid container spacing={4} maxWidth={ 600 } margin="auto" style={{
        textAlign:'center' // this does the magic
    }}>
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
        <Footer/>
        </>
        
    );

}

export default Menu;