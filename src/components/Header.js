import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { Grid } from '@mui/material';

import ModalHeader from './DropDown'

function Header(props) {

  const {amountOfItems} = props;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    color: "white",
    backgroundColor: "black",
  }));

  return (     
      <Toolbar class="header">

      <Grid
        container
        spacing={1}
        direction="columns"
        alignItems="center"
        justifyContent="center"
      >
        <Item>
          <Link class="linksInHeader" component={Link} variant="outlined" to="/" size="small">Home</Link>
          <Link to="/menu" class="linksInHeader" variant="outlined"  size="small">Menu</Link>
        </Item>
        <Item>
          <Link to="/"> 
            <img style={{width: '250px', height:'auto'}} src={Logo} alt="BellaLogo"></img>
          </Link>   
          </Item>
          <Item> 
          <Link  class="linksInHeader"component={Link} variant="outlined" to="/checkout" size="small">Checkout</Link>
          </Item>
          <ModalHeader />{amountOfItems ? (<button>{amountOfItems}</button>):('')}
        </Grid>
      </Toolbar>
  );
}

export default Header;