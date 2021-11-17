import * as React from "react";
import { Container, ToggleButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';

import Header from '../components/Header'
import Button from '../components/StandaloneToggleButton';
import Footer from '../components/FooterCard';

import mainImg from '../images/main.jpeg'
import warmpizza from '../images/warmpizza.jpeg'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    backgroundColor: "black",
    color: "white",
    boxShadow: "white",
    textAlign: "center",
    size: 90,
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
                gap:1
                }}>

                <Box gridColumn="Span 12">
                    <Item>
                        <img src={mainImg} width="100%" height="804px"/>
                    </Item>
                </Box>

                <Box sx={{
                    gridRow: 2,
                    gridColumn: 1,
                    }}>
               
                    
                        <Item>
                                <img src={warmpizza} width="738px" height="580px"/>
                        </Item>
                </Box>

                <Box sx={{
                    gridRow: 2,
                    gridColumn:2,
                }}>
                
               
                        <Item>

                                    <a>Real Italian</a><br/>
                                    <a style={{color: "green"}}>Pizza</a>
                                    <a> & </a>
                                    <a style={{color: "red"}}>Pasta</a><br/>
                        </Item>
                                    </Box>

                <Box sx={{
                    gridRow: 3,
                    gridColumn:2,
                }}>
                    <Item>
                    <Button/>
                    </Item>
                </Box>
                        
           



                <Box gridColumn="span 12">
                    <Item>
                        <Footer/>
                    </Item>
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