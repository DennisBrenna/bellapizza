import * as React from "react";
import { Container, ToggleButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';

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
    
  }));


function FormRow() {
    return (
      <React.Fragment>
          <Grid container item xs={12} container direction="column">
            <Grid item xs={1}>
            <Item>
                <img src={mainImg} width="100%" height="804px"/>
            </Item>
            </Grid>

            <Grid item xs={4}>
            <Item>
                <Grid container direction="row"> 
                    <Grid>
                        <img src={warmpizza} width="738px" height="580px"/>
                    </Grid>

                    <Grid>
                        <a>Real Italian</a><br/>
                        <a style={{color: "green"}}>Pizza</a>
                        <a> & </a>
                        <a style={{color: "red"}}>Pasta</a>
                    </Grid>

                    <Grid>
                        <Button/>
                    </Grid>
                </Grid>
            </Item>

            </Grid>
            
            <Grid item xs={4}>
            <Item>
                <Footer/>
            </Item>
            </Grid>
        </Grid>
      </React.Fragment>
    );
  }

 function MainCard() {

    return (
        <Box>
            <Grid container direction="column" justifyContent="center" alignContent="center">
                <FormRow />
            </Grid>
        </Box>
    )
 }

export default MainCard;