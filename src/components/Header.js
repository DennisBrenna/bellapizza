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

function CatHeader() {

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
        <Link style={{ textDecoration: 'none', color: 'secondary' }} to="/"> 
        <img src={Logo} alt="BellaLogo" width="321px" height="116px"></img>
         </Link>
        </Item>

        <Item>
        
        <Link class="linksHeader" component={Link} variant="outlined" to="/" size="small">Home</Link> 
        <Link  class="linksHeader"component={Link} variant="outlined" to="/menu" size="small">Meny</Link>
        <Link  class="linksHeader"component={Link} variant="outlined" to="/checkout" size="small">Checkout</Link>

        </Item>
        
        </Grid>
      </Toolbar>
   
  );
}

export default CatHeader;