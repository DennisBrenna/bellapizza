import * as React from "react";
import store from '../images/store.jpeg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../images/bellalogo_final.svg'
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";


import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
                    <Grid item xs={6}>
                        <img src={logo} alt="logo" width="321px" height="130,28"/>
                        <a>Contact us</a>
                        <a>Bella@frontend.com</a>
                        <a>Call Us +47 69696969</a>
                        <FacebookOutlinedIcon/>
                        <InstagramIcon/>
                        <TwitterIcon/>
                    </Grid>
                    <Grid item xs={6}>
                        <a>Opening hours</a>
                        <a>Sunday - Monday:</a>
                        <a>12pm - 10pm</a>

                        <a>Friday - Saterday:</a>
                        <a>12pm - 11pm</a>




                    </Grid>
                </Grid>

                <Grid>
                    <img src={store} alt="Inside" width="828px" height="637px"></img>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;