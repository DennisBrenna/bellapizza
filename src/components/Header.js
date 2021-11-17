import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../images/bellalogo_final.svg'

function CatHeader() {

  return (
    <>
      <Toolbar style={{color: 'main'}} sx={{ mb:2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link style={{ textDecoration: 'none', color: 'secondary' }} to="/"> <img src={Logo} alt="BellaLogo" width="321px" height="116px"></img> </Link>
        </Typography>
        <Button component={Link} variant="outlined" to="/" size="small">Home</Button> 
        <Button component={Link} variant="outlined" to="/menu" size="small">Meny</Button>
        <Button component={Link} variant="outlined" to="/checkout" size="small">Checkout</Button>
      </Toolbar >
    </>
  );
}

export default CatHeader;