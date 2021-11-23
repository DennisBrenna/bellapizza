import * as React from 'react';

//import mui
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import { styled} from '@mui/system';

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;`
;




function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <React.Fragment>
      <Button class="checkoutButton"onClick={handleOpen} >Open Child Modal</Button>
      <Modal
      
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Grid justifyContent="center" container>
       
        <Grid class="informationContainerChild">
        <IconButton id="close-icon-button" onclick={handleClose}>
            <CloseOutlinedIcon/>
            </IconButton>
          <h2 id="child-modal-title">Thanks for your order {NestedModal.id}!</h2>
            
          <p id="child-modal-description">
           Your order will be delivered soon
          </p>
          <Button class="checkoutButton"onClick={handleClose}>Close Child Modal</Button>
        </Grid>
       
        </Grid>
      </Modal >
    </React.Fragment>
    </div>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button class="checkoutButton"onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 10,
        }}
      >

<Grid justifyContent="center" container>
        <Grid class="informationContainer" >
        <IconButton id="close-icon-button" onclick={handleClose}>
            <CloseOutlinedIcon/>
            </IconButton>
      <h2>Personal Information</h2>
      <Grid container >
  
  
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


</Grid>
          <ChildModal onClose={handleClose}/>
        
        </Grid>
        </Grid>
        
      </Modal>
    </div>
  );
}