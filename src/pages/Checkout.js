import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { backdropClasses, Paper } from "@mui/material";
import Header from '../components/Header'

export default function Checkout() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'left',
        alignItems: "flex-end",
        color: "white",
        backgroundColor: "yellow",
        boxShadow: "white",
      }));

      const Title = styled(Paper)(({ theme }) => ({
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'left',
        alignItems: "flex-end",
        color: "white",
        backgroundColor: "red",
        boxShadow: "white",
      }));



    return (
        <>
            <Header/>
            <div>
            <Grid container>
                <Grid>
                <Title md={6}><h1>Items</h1></Title>
                </Grid>
               <Grid>
               <Title md={6}><h1>Price</h1></Title>
               </Grid>
            </Grid>


            <Grid container class="One">
                <Grid>
                <Title xs={6}> hei</Title>
                </Grid>
                <Grid>
                <Title xs={2}> hei</Title>
                </Grid>
                <Grid>
                <Item md={2}> hei</Item>
                </Grid>
                <Grid>
                <Item md={2}> hei</Item>
                </Grid>
                <Grid>
                <Item md={2}> hei</Item>
                </Grid>
           
           
            </Grid>
            </div>

     

            
            
        </>
    )
}
