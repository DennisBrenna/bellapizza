import React from 'react';
import Grid from '@mui/material/Grid';
import { IconButton, CloseIcon } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

    export default function PersonalInformation(props) {
    
    const {onClose} = props

    return (

    <>

<Grid container class="informationContainer">
   <IconButton id="close-icon-btn" onClick={onClose}>
              <CloseOutlinedIcon />
            </IconButton>
            <h2>Personal Information</h2>
        <Grid container>
            <Grid  md={6}>
    <label>First Name</label>
    <input type="text" id="firstName" placeholder="First name.."/>
    </Grid>
    <Grid md={6}>
    <label>Last Name</label>
    <input type="text" id="txtField" placeholder="Last name.."/><br />
    </Grid>
    </Grid>
    
    <Grid  container>
    <Grid md={6}>
    <label>Adress</label>
    <input type="text" id="txtField" placeholder="Adress.."/>
    </Grid>
    
    <Grid md={6}>
    <label>Telephone</label>
    <input type="text" id="txtField" placeholder="Telephone.."/><br />
    </Grid>
    </Grid>
    
    <Grid   container>
    <Grid md={6}>
    <label>City</label>
    <input type="text" id="txtField" placeholder="City.."/>
    </Grid>
    <Grid md={6}>
    <label>Postal Code</label>
    <input type="text" id="txtField" placeholder="Postal Code.."/><br />
    </Grid>
    </Grid>
    <Grid container>
    <Grid md={6}>
    <label>Card Number</label>
    <input type="text" id="cardNr" placeholder="Card Number.."/><br />
    </Grid>
    
    <Grid md={4}>
    <input type="radio" id="visa" name="card_type" value="Visa" />
    <label for="visa">Visa</label>
    <input type="radio" id="mastercard" name="card_type" value="Mastercard" />
    <label for="mastercard">Mastercard</label><br />
    </Grid>
    </Grid>
    <Grid  container>
    <Grid md={6}>
    <label>CVC</label>
    <input type="text" id="txtField" placeholder="CVC.."/>
    </Grid>
    <Grid md={6}>
    <label>Expiration Date</label>
    <input type="text" id="txtField" placeholder="Expiration Date.."/><br />
    </Grid>
    </Grid>
<<<<<<< HEAD
  
=======
    <input onClick="submit" id="submit" value="Place Your Order"/>
>>>>>>> b80284a8ea5eff13450700ddea701d66e68f80f3

</Grid>



</>
    )
}