import Button from '@mui/material/Button';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';


function MenuButton({products, filteredProducts}) {




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
        
      
        </Grid>
      </Toolbar>
   
  );
}

export default MenuButton;