import React from 'react';
import { IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ConfModal from './OrderConfModal';
import { Link } from 'react-router-dom';

    export default function PaymentInformation(props) {
    
    const {onClose} = props

    return (

    <>

<div class="informationContainer">
        <IconButton id="close-icon-btn" onClick={onClose}>
            <CloseOutlinedIcon />
        </IconButton>
            <h2>Payment Information</h2>
        
    <div>
        <label>First Name</label>
        <input type="text" id="txtField" placeholder="First name.."/>
    
        <label>Last Name</label>
        <input type="text" id="txtField" placeholder="Last name.."/><br />
    </div>
    
    <div>
        <label>Adress</label>
        <input type="text" id="txtField" placeholder="Adress.."/>
    
        <label>Telephone</label>
        <input type="text" id="txtField" placeholder="Telephone.."/><br />
    </div>
    
    <div>
        <label>City</label>
        <input type="text" id="txtField" placeholder="City.."/>
    
        <label>Postal Code</label>
        <input type="text" id="txtField" placeholder="Postal Code.."/><br />
    </div>

    <div>
        <label>Card Number</label>
        <input type="text" id="cardNr" placeholder="Card Number.."/><br />

    </div>

    <div>
        <label>CVC</label>
        <input type="text" id="txtField" placeholder="CVC.."/>
    
        <label>Expiration Date</label>
        <input type="text" id="txtField" placeholder="Expiration Date.."/><br />
    </div>

        <input type="radio" id="visa" name="card_type" value="Visa" />
        <label for="visa">Visa</label>
        <input type="radio" id="mastercard" name="card_type" value="Mastercard" />
        <label for="mastercard">Mastercard</label><br />

        <Link component={Link} variant="outlined" to="/OrderDone" size="small"><button class="submit">Place your order</button></Link>

</div>

</>
    )
}