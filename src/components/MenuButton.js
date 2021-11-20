import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

function MenuButton(props) {
    const { products, setFilteredProducts } = props

    const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(100),
    textAlign: 'center',
    alignItems: "flex-end",
    fontSize: "10px",
    color: "white",
    backgroundColor: "black",
    boxShadow: "white",
    justifyContent: "center",
    alignContent: "center",
  }));

    const filterProducts = (dish) => {
        console.log(dish)
        const filteredProducts = products.filter(product => { 
            if( dish === product.dish) {
                return product
            }
         })
         setFilteredProducts(filteredProducts)
    }

    return (

      <Toolbar >

      <Grid 
       container
       spacing={0}
       direction="column"
       alignItems="center"
       justifyContent="center"
       marginTop="15px"
       marginBottom="10px"
      >
        
        <Item class="allLinks">
        
        <button className="linksInMenu" onClick={ (e) => filterProducts(e.target.innerText) }>Pizza</button>
        <button onClick={ (e) => filterProducts(e.target.innerText) }>Pasta</button>
        <button onClick={ (e) => filterProducts(e.target.innerText) }>Drinks</button>
        {/*<Link class="linksInMenu" component={Link} variant="outlined" size="small">Pizza</Link> 
        <Link class="linksInMenu" component={Link} variant="outlined" size="small">Pasta</Link>
        <Link class="linksInMenu" component={Link} variant="outlined" size="small">Drinks</Link>*/}

        </Item>
        
        </Grid>
      </Toolbar>
   
  );
}

export default MenuButton;