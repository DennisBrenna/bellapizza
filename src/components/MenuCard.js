import React from "react";
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import Grid from '@mui/material/Grid';


function MenuCard() {

    return(
    <>
        <Grid container rowSpacing={1} columnSpacing={4} width={ 900 } margin="auto" marginBottom="50px">
            <Grid item xs={3}>
                <ProductCard title="Vesuvio" description="Chesse, Ham" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Hawaii" description="Cheese, Ham, Pineapple" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Capricciosa" description="Cheese, Ham, Mushroom" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Mexicana" description="Cheese, Meat Sauce, Onion, Pepper" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Kebab Pizza" description="Cheese, Kebab Meat, Onion, Kebab Sauce" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Jason Special" description="Cheese, Salami, Mushroom, Chili" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Dennis Special" description="Spaghetti, Bacon, Cream, Parmesan Black Pepper" dish="pasta"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Dallas Star" description="Speghetti, Squid, Cream, Spinach, Basil, Chili" dish="pasta"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="New York Ranger" description="Pasta, Swedish Meatballs, Tomato Sauce" dish="pasta"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Vesuvio" description="Chesse, Ham" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Hawaii" description="Cheese, Ham, Pineapple" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Capricciosa" description="Cheese, Ham, Mushroom" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Mexicana" description="Cheese, Meat Sauce, Onion, Pepper" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Kebab Pizza" description="Cheese, Kebab Meat, Onion, Kebab Sauce" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Jason Special" description="Cheese, Salami, Mushroom, Chili" dish="pizza"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Pasta Carbonara" description="Spaghetti, Bacon, Cream, Parmesan Black Pepper" dish="pasta"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Pasta Spicy Seafood" description="Speghetti, Squid, Cream, Spinach, Basil, Chili" dish="pasta"/>
            </Grid>
            <Grid item xs={3}>
                <ProductCard title="Pasta Meatballs" description="Pasta, Swedish Meatballs, Tomato Sauce" dish="pasta"/>
            </Grid>
        </Grid>
        </>
    );
}

export default MenuCard;