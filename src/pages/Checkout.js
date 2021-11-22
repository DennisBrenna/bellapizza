import React from 'react';
import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import ShoppingCart from '../components/ShoppingCart';
import {getProducts} from '../dummyData/menuData';
import Modal from '../components/Modal';

export default function Checkout(props) {

  const {cartItems, onAdd, onRemove, amountOfItems} = props;
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
        backgroundColor: 'black',
        color: 'white'

       
      }));

      const Title2 = styled(Paper)(({ theme }) => ({
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'right',
        backgroundColor: 'black',
        color: 'white'
      }));

      const [products, setproducts] = useState([])
      
      
        useEffect(() => {
          let response = getProducts()
          setproducts(response)
      }, [])

    return (
        <>
            <Header amountOfItems={amountOfItems}/>
           
           <div class="checkOutContainer">
            <Grid container>
                <Grid md={6}>
                <Title ><h1>Items</h1></Title>
                </Grid>
               <Grid md={6} >
               <Title2 ><h1>Price</h1></Title2>
               </Grid>
            </Grid>


            <Grid container class="One">
            
           
            <ShoppingCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
           
            </Grid>
            <Grid container>
                <Grid>
                <Title md={6}><h1>Thirsty?</h1></Title>
                </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={4} width={ 900 } margin="auto" marginBottom="50px">
            { products.filter(product => product.id > 16).map(product => ( <Grid item key={ product.id } md={4} xs={4}>
                <ProductCard onAdd={onAdd} product={product}/> </Grid> ))}
            

            </Grid>
        
            <Grid container justifyContent="center" marginBottom="100px" >
                <Grid >
                <Modal class="checkoutButton" varitant="outlined" size="large"/>  
              </Grid>
               
            </Grid>  
            </div>
            
        </>
    )
}