import * as React from "react";
import { Container, ToggleButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';


import Header from '../components/Header'
import Button from '../components/StandaloneToggleButton';
import Footer from '../components/FooterCard';

import mainImg from '../images/main.png'
import warmpizza from '../images/warmpizza.jpeg'
import { height } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    backgroundColor: "black",
    color: "white",
    boxShadow: "white",
    textAlign: "center",
    fontsize: "30px",
    size:"30px",
    justifyContent: "center",
    alignContent: "center",
    boxShadow: "none",

  }));


function FormRow() {
    return (
   
      <React.Fragment>
        <Item>
        <Box sx={{width: 1}}>
            <Box sx={{
                display:"grid",
                gridTemplateColumns:"repeat(2, 1fr)",
                gridTemplateRows:"repeat(1, 1fr)",
                gap:1,
                }}>

                <Box gridColumn="Span 12">
                    <Item>
                        <img src={mainImg} width="100%" height="804px"/>
                    </Item>
                    <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    marginTop="30px"
                    marginBottom="-5px"
                    >
                    <Divider orientation="horizontal" color="white" flexItem></Divider>
                    </Grid>
                </Box>

                
                <Box sx={{
                    gridRow: 2,
                    gridColumn: 1,
                    height:'1000px',
                    marginTop:"50px",
                    marginBottom:"-200px",

                    }}>
               
                    <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    marginLeft="-10px"
                    
                    >
                        <Item>
                                <img src={warmpizza} width="700" height="700" borderRadius= "30px"/>
                        </Item>
                    </Grid>
                </Box>

                <Box sx={{
                    gridRow: 2,
                    gridColumn:2,
                }}>
                
               
                        <Item>
                        <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="60px"
                    marginTop="40px"
                    >

                                    <a>Real Italian</a>
                                <Grid 
                                container
                                direction="row"
                                alignContent="center"
                                justifyContent="center"
                                fontSize="60px"
                                >
                                    <a style={{color: "green", paddingRight:'20px'}}>Pizza</a>
                                    <a> & </a>
                                    <a style={{color: "red", paddingLeft:'20px'}}>Pasta</a>
                                    
                                </Grid>
                                
                            </Grid>
                            <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="60px"
                    marginTop="13%"
                    >
                        <Divider orientation="horizontal" color="white" flexItem></Divider>
                        </Grid>
                        </Item>
                   </Box>

                <Box sx={{
                    gridRow: 2,
                    gridColumn:2,
                    marginTop:"50%",
                    size: "large",
                }}>
                    <Item>
                    <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="black"
                    >
                    <Link to="/Menu">
                    <button type="button" >ORDER NOW</button>
                    </Link>
                    </Grid>
                    </Item>
                </Box>
                        
           


                <Box gridColumn="span 12">
                
                </Box>
            </Box>
        </Box>
        </Item>
      </React.Fragment>
    );
  }

 function MainCard() {

    return (
        <Header/>,
        <FormRow />  
    )
 }

export default MainCard;