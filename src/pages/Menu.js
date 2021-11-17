import React from "react";
import ProductCard from '../components/ProductCard';
import Grid from '@mui/material/Grid';
import Footer from '../components/FooterCard';

function Menu() {

    return(

        <>
        <Grid container spacing={4} maxWidth={ 600 } margin="auto">
            <Grid item xs={4}>
                <ProductCard title="Vesuvio" description="Chesse, Ham"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Hawaii" description="Cheese, Ham, Pineapple"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Capricciosa" description="Cheese, Ham, Mushroom"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Mexicana" description="Cheese, Meat Sauce, Onion, Pepper"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Kebab Pizza" description="Cheese, Kebab Meat, Onion, Kebab Sauce"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Jason Special" description="Cheese, Salami, Mushroom, Chili"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Pasta Carbonara" description="Spaghetti, Bacon, Cream, Parmesan Black Pepper"/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard title="Pasta Spicy Seafood" description="Speghetti, Squid, Mushroom, Cream, Spinach, Basil, Chili"/>
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