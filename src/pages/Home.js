import * as React from "react";
import { Container, ToggleButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';


import mainImg from '../images/main.jpeg'
import warmpizza from '../images/warmpizza.jpeg'

import Button from '../components/StandaloneToggleButton'
import MainCard from '../components/MainCard';
import Footer from '../components/FooterCard';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    backgroundColor: "black",
    color: "white"


  }));


function FormRow() {
    return (
      <React.Fragment>

        <Grid maxWidth={1980} margin="auto" item xs={12}>
          <Item>
            <img src={mainImg}/>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Grid container direction="row"> 
                <img src={warmpizza}/>
                <a>Real Iralian</a><br/>
                <a>Pizza & Pasta</a>
            </Grid>

            <Grid>
                <Button/>
            </Grid>
          </Item>
        </Grid>
        
        <Grid item xs={4}>
          <Item>
            <Footer/>
          </Item>
        </Grid>
      </React.Fragment>
    );
  }

 function Home() {

    return (
        <Box>
            <Grid container direction="column" justifyContent="center" alignContent="center">
                <FormRow />
            </Grid>
        </Box>
    )
 }

export default Home;