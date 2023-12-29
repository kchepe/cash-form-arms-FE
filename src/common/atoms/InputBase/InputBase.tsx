import { Input, type InputProps } from 'antd';
import React, { type ReactNode } from 'react';

const InputBase = (props: Omit<InputProps, 'size'>): ReactNode => {
  return <Input {...props} size="large" />;
};

export default InputBase;
