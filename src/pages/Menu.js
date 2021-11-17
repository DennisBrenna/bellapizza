import React from "react";
import ProductCard from '../components/ProductCard';
import Grid from '@mui/material/Grid';
import Footer from '../components/FooterCard';

function Menu() {

    return(

        <>
        <Grid container spacing={4} maxWidth={ 600 } margin="auto">
            <Grid item xs={4}>
                <ProductCard title="Calzone" description="(Folded) Cheese, Ham"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Vesuvio" description="Cheese, Ham"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Capricciosa" description="Cheese, Ham, Mushroom"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Mexicana" description="Cheese, Meat Sauce, Onion, Pepper, Chili"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Kebab Pizza" description="Cheese, Kebab Meat, Onion, Kebab Sauce"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Jason Special" description="Cheese, Salami, Mushroom, Tomato, Olive"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Pasta Carbonara" description="Spaghetti, Bacon, Cream, Parmesan Black Pepper"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Spicy Pasta Seafood" description="Speghetti, Squid, Mushroom, Cream, Spinach, Basil, Chili"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Pasta Meatballs" description="Pasta, Swedish Meatballs, Tomato Sauce"/>
            </Grid>
        </Grid>
        <Footer/>
        </>
        
    );

}

export default Menu;