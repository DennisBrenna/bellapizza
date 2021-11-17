import * as React from "react";
import store from '../images/store.jpeg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../images/bellalogo_final.svg'
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
  }));

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Item>
            <img src={logo} alt="logo" width="321px" height="130,28"/><br/>
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <TwitterIcon/><br/>
                <a>Contact us</a><br/>
                <a>Bella@frontend.com</a><br/>
                <a>Call Us +47 69696969</a><br/>
          </Item>
        </Grid>

        <Grid item xs={3}>
            <Item>
                <a>Opening hours</a><br/>
                <a>Sunday - Monday:</a><br/>
                <a>12pm - 10pm</a><br/>

                <a>Friday - Saterday:</a><br/>
                <a>12pm - 11pm</a>
          </Item>
        </Grid>
        <Grid item xs={6}>
            <Item>
                <img src={store} alt="Inside" width="800px" height="500px"></img>
            </Item>
        </Grid>
      </React.Fragment>
    );
  }

function Footer() {

    return (

        <Box>
            <Grid container item spacing={3} alignItems="flex-end">
                <FormRow />
            </Grid>
        </Box>
        // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={1}>
        //         <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
        //             <Grid container item xs={4}>
        //                 <Item>
        //                     <img src={logo} alt="logo" width="321px" height="130,28"/><br/>
        //                     <FacebookOutlinedIcon/>
        //                     <InstagramIcon/>
        //                     <TwitterIcon/><br/>
        //                     <a>Contact us</a><br/>
        //                     <a>Bella@frontend.com</a><br/>
        //                     <a>Call Us +47 69696969</a><br/>
        //                 </Item>
        //             </Grid>
        //             <Grid item xs={4}>
        //                 <Item>
        //                     <a>Opening hours</a>
        //                     <a>Sunday - Monday:</a>
        //                     <a>12pm - 10pm</a>

        //                     <a>Friday - Saterday:</a>
        //                     <a>12pm - 11pm</a>
        //                 </Item>




        //             </Grid>
        //         </Grid>

        //         <Grid item xs={4}>
        //             <Item>
        //                 <img src={store} alt="Inside" width="828px" height="637px"></img>
        //             </Item>
        //         </Grid>
        //     </Grid>
        // </Box>
    )
}

export default Footer;