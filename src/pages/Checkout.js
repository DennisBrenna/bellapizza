import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";
import ProductCard from '../components/ProductCard';
import Header from '../components/Header'
import pizza from '../images/pizza1.png'

export default function Checkout() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'left',
        alignItems: "flex-end",
        color: "white",
        backgroundColor: "yellow",
        boxShadow: "white",
      }));

      const Title = styled(Paper)(({ theme }) => ({
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'left',
        alignItems: "flex-end",
        color: "white",
        backgroundColor: "red",
        boxShadow: "white",
      }));



    return (
        <>
            <Header/>
            
            <Grid container>
                <Grid>
                <Title md={6}><h1>Items</h1></Title>
                </Grid>
               <Grid>
               <Title md={6}><h1>Price</h1></Title>
               </Grid>
            </Grid>


            <Grid container class="One">
                <Grid>
                <Title xs={6}> hei</Title>
                </Grid>
                <Grid>
                <Title xs={2}> hei</Title>
                </Grid>
                <Grid>
                <img src={pizza}></img>
                </Grid>
                <Grid>
                <Item md={2}> hei</Item>
                </Grid>
                <Grid>
                <Item md={2}> hei</Item>
                </Grid>
           
           
            </Grid>
            <Grid container>
                <Grid>
                <Title md={6}><h1>Want something else?</h1></Title>
                
                </Grid>
                
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
            </Grid>

            <Grid>
                <Button>Checkout</Button>
            </Grid>


     

            
            
        </>
    )
}
