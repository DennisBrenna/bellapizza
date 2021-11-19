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
import { spacing } from '@mui/system';

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
    size: "48",
  }));

  return (

     
      <Toolbar >

      <Grid
        container
        spacing={0}
        direction="columns"
        alignItems="center"
        justifyContent="center"
        marginLeft="125px"

      >
        <Item>     
        <Link class="linksInHeader" component={Link} variant="outlined" to="/" size="small">Home</Link> 
        <Link  class="linksInHeader"component={Link} variant="outlined" to="/menu" size="small">Meny</Link>
        </Item>
        <Item>
        <Link to="/"> 
        <img style={{width: '250px', height:'auto'}} src={Logo} alt="BellaLogo"></img>
        </Link>   
        </Item>
        <Item>
        <Link  class="linksInHeader"component={Link} variant="outlined" to="/locations" size="small">Locations</Link>
        <Link  class="linksInHeader"component={Link} variant="outlined" to="/checkout" size="small">Checkout</Link>
        
        </Item>
        
        </Grid>
      </Toolbar>
   
  );
}

export default Header;