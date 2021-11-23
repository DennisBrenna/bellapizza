import React from 'react';
import Grid from '@mui/material/Grid';
import { IconButton, CloseIcon } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ConfModal from './OrderConfModal';

    export default function PaymentInformation(props) {
    
    const {onClose} = props

    return (

    <>

<div class="informationContainer" style={{
    height: "444.668px",
}}>
        <IconButton id="close-icon-btn" onClick={onClose}>
            <CloseOutlinedIcon />
        </IconButton>
            <h2>Thanks for your order</h2>
        
            <p>Your order will be delievered soon</p>

</div>

</>
    )
}