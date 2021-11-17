import * as React from "react";
import store from '../images/store.jpeg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../images/logo.png'
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";
import { Divider } from "@mui/material";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { MarginTwoTone } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: "flex-end",
    color: "white",
    backgroundColor: "black",
    boxShadow: "white",
    fontSize: "30px",


  }));

  function FormRow() {
    return (
        <Box
        sx={{
            display:'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            alignItems:"center",
            justifyContent:"center",
            marginLeft:"10%",
            marginBottom:"10px",
        }}>
            <Item sx={{
                gridColumn:1,
            }}>
               
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                
                <img src={logo} alt="logo" width="321px" height="130,28"/><br/>
                <Grid 
                    container 
                    direction="row"
                    alignItems="center"
                    justifyContent="center">
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                </Grid>
                <a>Contact us</a>
                <a>Bella@frontend.com</a>
                <a>Call Us +47 69 69 69 69</a>
                </Grid>
            </Item>

            <Item sx={{
                gridColumn:2,
                
            }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                <a>Opening hours</a><br/>

                <a>Sunday - Monday:</a>
                <a>12pm - 10pm</a><br/>

                <a>Friday - Saterday:</a>
                <a>12pm - 11pm</a>
                </Grid>
            </Item>

            <Item sx={{
                gridColumn:3,
                
            }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                <img src={store} alt="Inside" width="auto" height="350px"></img>
                </Grid>
            </Item>
        </Box>      
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