import React, { type ReactNode } from 'react';
import LoadingButtonBase, { type LoadingButtonProps } from '@mui/lab/LoadingButton';

interface iLoadingButton extends LoadingButtonProps {
  children?: ReactNode;
}

const LoadingButton = (props: iLoadingButton): ReactNode => {
  const { children, sx, ...rest } = props;
  return (
    <LoadingButtonBase sx={{ textTransform: 'none', ...sx }} {...rest}>
      {children}
    </LoadingButtonBase>
  );
};

export default LoadingButton;
