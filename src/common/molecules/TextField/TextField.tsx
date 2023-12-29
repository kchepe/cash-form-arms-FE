import React, { type ReactNode } from 'react';
import { InputBase, Text } from '../../atoms';
import { type InputProps } from 'antd';

interface TextFieldProps extends Omit<InputProps, 'size'> {
  label?: string;
}

const TextField = ({ label, ...rest }: TextFieldProps): ReactNode => {
  return (
    <div className="space-y-2 text-lg">
      {label && <Text text={label} strong />}
      <InputBase {...rest} />
    </div>
  );
};

export default TextField;
