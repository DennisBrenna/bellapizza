import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";

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

      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%"}}>
      <Item> 
      </Item>
      
      <Item style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Link to="/"> 
            <img class="bella-logo" src={Logo} alt="BellaLogo"></img>
          </Link>  
          <Link class="linksInHeader" component={Link} variant="outlined" to="/" size="small">Home</Link>
          <Link to="/menu" class="linksInHeader" variant="outlined"  size="small">Menu</Link> 
          <Link  class="linksInHeader"component={Link} variant="outlined" to="/checkout" size="small">Checkout<>{amountOfItems ? (<button>{amountOfItems}</button>):('')}</></Link>
      </Item>
        </div>
      </Toolbar>
  );
}

export default Header;