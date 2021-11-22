import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { Grid } from '@mui/material';

function Header(props) {

  const {countCartItems} = props;

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
          <Link  class="linksInHeader"component={Link} variant="outlined" to="/locations" size="small">Locations</Link>
        </Item>
        <Item>
          <Link to="/"> 
            <img style={{width: '250px', height:'auto'}} src={Logo} alt="BellaLogo"></img>
          </Link>   
          </Item>
        <Item>
          <Link to="/menu" onClick={() => window.location.reload()}  class="linksInHeader" variant="outlined"  size="small">Menu</Link>
          <Link  class="linksInHeader"component={Link} variant="outlined" to="/checkout" size="small">Checkout {countCartItems ? (<button>{countCartItems}</button>):('')}</Link>
        </Item>
        </Grid>
      </Toolbar>
   
  );
}

export default Header;