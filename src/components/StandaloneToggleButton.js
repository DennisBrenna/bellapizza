import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState('web');

  return (
    <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
            setSelected(!selected);
        }}
    >
      <a>Order Now</a>
    </ToggleButton>
  );
}