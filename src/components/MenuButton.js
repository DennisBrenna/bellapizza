import Button from '@mui/material/Button';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { backdropClasses, Paper } from "@mui/material";
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
    

      >
        
      
        </Grid>
      </Toolbar>
   
  );
}

export default MenuButton;