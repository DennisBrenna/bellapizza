import React from 'react';

    export default function PersonalInformation() {

    return (

    <>

<div class="informationContainer">
<div class="modal-content">
    <button><span class="close">&times;</span></button>
  </div>
    <h2>Personal Information</h2>
    
    <label>First Name</label>
    <input type="text" id="firstName" placeholder="First name.."/>

    <label>Last Name</label>
    <input type="text" id="txtField" placeholder="Last name.."/><br />

    <label>Adress</label>
    <input type="text" id="txtField" placeholder="Adress.."/>

    <label>Telephone</label>
    <input type="text" id="txtField" placeholder="Telephone.."/><br />

    <label>City</label>
    <input type="text" id="txtField" placeholder="City.."/>

    <label>Postal Code</label>
    <input type="text" id="txtField" placeholder="Postal Code.."/><br />

    <input type="radio" id="visa" name="card_type" value="Visa" />
    <label for="visa">Visa</label>
    <input type="radio" id="mastercard" name="card_type" value="Mastercard" />
    <label for="mastercard">Mastercard</label><br />

    <label>Card Number</label>
    <input type="text" id="cardNr" placeholder="Card Number.."/><br />

    <label>CVC</label>
    <input type="text" id="txtField" placeholder="CVC.."/>

    <label>Expiration Date</label>
    <input type="text" id="txtField" placeholder="Expiration Date.."/><br />

    <input onClick="submit()" id="submit" value="Place Your Order"/>


</div>

</>
    )
}