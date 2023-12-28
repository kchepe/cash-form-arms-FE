import React, { type ReactNode } from 'react';
import { Button as ButtonBase, type ButtonProps } from 'antd';

interface iButton extends ButtonProps {
  children?: ReactNode;
}

const Button = (props: iButton): ReactNode => {
  const { children, ...rest } = props;
  return <ButtonBase {...rest}>{children}</ButtonBase>;
};

export default Button;
