import React, { type ReactNode } from 'react';
import { Typography as TypographyBase, type TypographyProps } from '@mui/material';

interface iTypography extends TypographyProps {
  text: string | ReactNode;
}

const Typography = ({ text, ...rest }: iTypography): ReactNode => {
  return <TypographyBase {...rest}>{text}</TypographyBase>;
};

export default Typography;
