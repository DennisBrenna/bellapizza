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


  }));

export default function Error() {
    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                marginTop="30px"
                marginBottom="-5px"
                >
                    <p>Items</p>                
                    </Grid>

        </div>
    )
}
