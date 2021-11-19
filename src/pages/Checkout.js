import React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import pizza from '../images/Pizza.png';
import Product from '../components/Product';
import ShoppingCart from '../components/ShoppingCart';


export default function Checkout(props) {

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

      const {products} = props;
      const [cartItems, setCartItems] = useState([]);
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
      const onRemove = (product) => {
        const exists = cartItems.find(x => x.id === product.id);
        if(exists.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ?{...exists, qty: exists.qty-1}:x
                ));
        }

      }

    return (
        <>
            <Header countCartItems={cartItems.length}/>
            <ShoppingCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
            
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
            </Grid>

            <Grid container>
                <Grid md={4}>
            
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove} dish="pizza"></Product>
                ))}
               
                </Grid>
            </Grid>

            <Grid>
                <Button>Checkout</Button>
            </Grid>


     

            
            
        </>
    )
}
