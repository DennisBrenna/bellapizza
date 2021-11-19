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

function Header() {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: "flex-end",
    color: "white",
    backgroundColor: "black",
    boxShadow: "white",
    justifyContent: "center",
    alignContent: "center",
  }));

  return (

     
      <Toolbar >

      <Grid 
       container
       spacing={0}
       direction="column"
       alignItems="center"
       justifyContent="center"
       marginTop="5px"
      >
        <Item>
        <Link to="/"> 
        <img style={{width: '250px', height:'auto'}} src={Logo} alt="BellaLogo"></img>
         </Link>
        </Item>

        <Item class="allLinks">
        
        <Link class="linksInHeader" component={Link} variant="outlined" to="/" size="large">Home</Link> 
        <Link  class="linksInHeader"component={Link} variant="outlined" to="/menu" size="small">Meny</Link>
        <Link  class="linksInHeader"component={Link} variant="outlined" to="/checkout" size="small">Checkout</Link>

        </Item>
        
        </Grid>
      </Toolbar>
   
  );
}

export default Header;