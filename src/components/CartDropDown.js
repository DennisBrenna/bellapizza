import React from 'react';
import Grid from '@mui/material/Grid';
import ShoppingCart from './ShoppingCart';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material'
import { amber, teal } from '@mui/material/colors';
import { ThemeProvider } from '@mui/system';
import warmpizza from '../images/pizzaman.png'
import { Link } from 'react-router-dom'





    export default function CartDropDown() {

    

    return (

    <>
           
        <ShoppingCart/>

    </>
    )
}