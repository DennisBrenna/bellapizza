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
        <div className="footer"
        style={{
            alignItems:"center",
            justifyContent:"center",
            width:"100%",
        }}>
            <Item>
               
                <div className="divFooterContainer">

                <div className="divFooter1">
                    <div>
                        <img src={logo} alt="logo" className="logoFooter"/>
                    </div> 
                    <div>
                        <FacebookOutlinedIcon/>
                        <InstagramIcon/>
                        <TwitterIcon/>
                        <p>Contact us</p>
                        <p>Bella@frontend.com</p>
                        <p>Call Us +47 69 69 69 69</p>
        
                    </div>
        
                
                </div>

                <div className="divFooter2">
                    <p>Opening hours</p>
                    <p>Sunday - Monday:</p>
                    <p>11AM - 12PM</p>
                    <p>Friday - Saterday:</p>
                    <p>11AM - 11PM</p>
                </div>
                <div className="footerImgDiv">
                    <img src={store} alt="bar desk" className="footerImg" style={{borderRadius:"10%"}}/>
                </div>


                </div>           
            </Item>
        </div>   
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