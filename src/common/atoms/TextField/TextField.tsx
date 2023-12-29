import React, { type ReactNode } from 'react';
import { TextField as TextFieldBase, type TextFieldProps } from '@mui/material';

const TextField = (props: TextFieldProps): ReactNode => {
  return <TextFieldBase {...props} />;
};

export default TextField;
