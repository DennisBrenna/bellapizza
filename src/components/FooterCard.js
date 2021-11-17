import * as React from "react";
import store from '../images/store.jpeg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../images/bellalogo_final.svg'
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: "flex-end",
    color: "white",
    backgroundColor: "black",
    boxShadow: "white",

  }));

  function FormRow() {
    return (
      <Grid container justifyContent="center" alignContent="center" item xs={12}>
        <Grid container justifyContent="center" alignContent="center" item xs={3}>
          <Item>
            <img src={logo} alt="logo" width="321px" height="130,28"/><br/>
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <TwitterIcon/><br/>
                <a>Contact us</a><br/>
                <a>Bella@frontend.com</a><br/>
                <a>Call Us +47 69 69 69 69</a><br/>
          </Item>
        </Grid>

        <Grid container item xs={3}>
            <Item>
                <a>Opening hours</a><br/>
                <a>Sunday - Monday:</a><br/>
                <a>12pm - 10pm</a><br/>

                <a>Friday - Saterday:</a><br/>
                <a>12pm - 11pm</a>
          </Item>
        </Grid>

        <Grid container item xs={3}>
            <Item>
                <img src={store} alt="Inside" width="800px" height="500px"></img>
            </Item>
        </Grid>
      </Grid>
    );
  }

function Footer() {

    return (
        <Box>
            <Grid container item spacing={3} alignItems="center">
                <FormRow />
            </Grid>
        </Box>
    )
}

export default Footer;