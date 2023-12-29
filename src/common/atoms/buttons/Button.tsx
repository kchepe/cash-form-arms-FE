import React, { type ReactNode } from 'react';
import { Button as ButtonBase, type ButtonProps } from '@mui/material';

interface iButton extends ButtonProps {
  children?: ReactNode;
}

const Button = (props: iButton): ReactNode => {
  const { children, sx, ...rest } = props;
  return (
    <ButtonBase sx={{ textTransform: 'none', ...sx }} {...rest}>
      {children}
    </ButtonBase>
  );
};

export default Button;
