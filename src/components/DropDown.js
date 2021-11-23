import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import ShoppingCart from './ShoppingCart';
import CartDropDown from './CartDropDown';
import Checkout from '../pages/Checkout'
import Error from '../pages/Error';
import { Link } from 'react-router-dom'

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: -70%;
  left: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  color: red;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  
`;



export default function ModalUnstyledDemo(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <div>
        <Button color="primary" onClick={() => { handleOpen(); }}> 
        <ShoppingCartIcon/>
        </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
           
      </StyledModal>
    </div>
  );
}