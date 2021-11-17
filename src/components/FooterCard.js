import * as React from "react";
import store from '../images/store.jpeg';
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';
import logo from '../images/bellalogo_final.svg'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


function Footer() {

    return (
        <div>
            <div id="mainFooterContainer">
                <div id="logo-container">
                    <img src={logo} alt="logo" width="321px" height="130,28"/>
                    <a>Contact us</a>
                    <a>Bella@frontend.com</a>
                    <a>Call Us +47 69696969</a>
                    <FacebookOutlinedIcon/>
                </div>
                <div id="OpeningHours-container">
                    <a>Opening hours</a>
                    <a>Sunday - Monday:</a>
                    <a>12pm - 10pm</a>

                    <a>Friday - Saterday:</a>
                    <a>12pm - 11pm</a>




                </div>
            </div>

            <div>
                <img src={store} alt="Inside" width="828px" height="637px"></img>
            </div>

        </div>
    )
}

export default Footer;