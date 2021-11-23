import * as React from "react";

//import image
import store from '../images/store.jpeg';
import logo from '../images/logo.png';

//import mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
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
            height:"100vh",
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
                
                <img src={logo} alt="logo" width="321px" height="100"/><br/>
                <Grid 
                    container 
                    direction="row"
                    alignItems="center"
                    justifyContent="center">
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                </Grid>
                <p>Contact us</p>
                <p>Bella@frontend.com</p>
                <p>Call Us +47 69 69 69 69</p>
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
                <p>Opening hours</p><br/>

                <p>Sunday - Monday:</p>
                <p>11AM - 12PM</p><br/>

                <p>Friday - Saterday:</p>
                <p>11AM - 11PM</p>
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
                <img src={store} alt="bar desk" 
                style={{
                    width:"auto",
                    height:"350px",
                    borderRadius:"10%",
                    paddingRight:"10px"
                }}
                ></img>
                </Grid>
            </Item>
        </Box>   
    );
  }

function Footer() {

    return (
        <Box>
            <Grid container item spacing={3} alignItems="center">
                <FormRow/>
            </Grid>
        </Box>
    )
}

export default Footer;