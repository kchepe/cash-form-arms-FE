import React, { type ReactNode } from 'react';
import { IconButton as IconButtonBase, type IconButtonProps } from '@mui/material';

interface iIconButton extends IconButtonProps {
  children: ReactNode;
}

const IconButton = ({ children, ...rest }: iIconButton): ReactNode => {
  return <IconButtonBase>{children}</IconButtonBase>;
};

export default IconButton;
