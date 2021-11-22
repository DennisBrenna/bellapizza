import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material'
import { amber, teal } from '@mui/material/colors';
import { ThemeProvider } from '@mui/system';
import warmpizza from '../images/pizzaman.png'
import { Link } from 'react-router-dom'


export default function ShoppingCart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 50 ? 0 : 10;
    const totalPrice = itemsPrice+shippingPrice;

    

    const Title2 = styled(Paper)(({ theme }) => ({
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'right',
        backgroundColor: 'black',
        color: 'white'
      }));

      const theme = createTheme({
        palette: {
          primary: teal,
          secondary: amber,
        },
      })


      const Buttons = styled(Paper)(({ theme }) => ({
        ...theme,
        
        
      }));
    //Hvorfor funker ikke justifyContent: flex-end??? finn alternativ
    return (
        <>
        
        <div>
            {cartItems.length === 0 && <h1 style={{color:'white'}} >No pizza found. <Link style={{color:'white'}}to="/menu">Click here!</Link> </h1>}
        </div>
        {cartItems.map((item)=>(
            
            <Grid container margin="15px"key={item.id}>
                <Grid md={6}><div className="shoppingCartName" >{item.title}</div></Grid>
              
              <Grid md={6}>
                  
               <Grid container>
                <Grid   md={6}>
               
                    <Button class="DrinkaddButton" variant="outlined" onClick={()=>onAdd(item)}>+</Button>
                    <Button class="DrinkaddButton" variant="outlined" onClick={()=>onRemove(item)}>-</Button>

                </Grid>
              
                
                
                <Grid md={6}>
                    
                       
                        <Title2 md={6}>
                <div className="shoppingCartPrice">
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
                </Title2>
               
                </Grid>
                </Grid>
                
                </Grid>
               
                </Grid>
               
                
           
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
              
                    <Title2>
                <div className="shoppingCartPrice">
                    <div>Items Price</div>
                    <div>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="shoppingCartPrice">
                    <div>Shipping</div>
                    <div>${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="shoppingCartPrice">
                    <div>Total Price</div>
                    <div>${totalPrice.toFixed(2)}</div>
                </div>
                </Title2>
            
                </>
            )}
        </>
    );
}
