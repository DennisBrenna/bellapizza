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
import mainImg from '../images/main.jpg'
import warmpizza from '../images/warmpizza.jpeg'
import { height } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    backgroundColor: "black",
    color: "white",
    paddingTop:"0px",
    padding:"0 0 0 0"

  }));


function FormRow(props) {
    const {amountOfItems} = props;
    return (
        <>
        <Item>
        <Box sx={{width: 1}}>
        <Header amountOfItems={amountOfItems}/>
            <Box sx={{
                display:"grid",
                gridTemplateColumns:"repeat(2, 1fr)",
                gridTemplateRows:"repeat(1, 1fr)",
                gap:1,
                }}>

                <Box gridColumn="Span 12" height={"100vh"}>
                    
                    
                    <Item>
                        <div style={{
                            backgroundImage: `url(${mainImg})`,
                            ackgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "92vh",
                            width: "100%",
                            }}>
                                </div>
                    </Item>
                    <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    marginTop="30px"
                    marginBottom="-5px"
                    >
                    </Grid>
                </Box>

                
                <Box sx={{
                    gridRow: 2,
                    gridColumn: 1,
                    height:'100vh',
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
                                <img src={warmpizza} style={{
                                width:"300px",
                                height:"700",
                                borderRadius:"10%"
                            }}
                                id="warmpizzaMain"/>
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
                    <button type="button" id="mainOrdernowBtn">ORDER NOW</button>
                    </Link>
                    </Grid>
                    </Item>
                </Box>
                        
           


                <Box gridColumn="span 12">
                
                </Box>
            </Box>
        </Box>
        </Item>
        </>
    );
  }

 function MainCard(props) {
   
    return (
        <Header />,
        <FormRow />  
    )
 }

export default MainCard;