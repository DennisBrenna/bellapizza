import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import PersonalInformation from './PersonalInformation';


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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

const style = {
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
};

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button type="button" class="checkoutButton" onClick={handleOpen}>
      Checkout
      </button>
      <StyledModal sx={ style }

        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >

          <PersonalInformation /> 

      </StyledModal>
    </div>
  );
}