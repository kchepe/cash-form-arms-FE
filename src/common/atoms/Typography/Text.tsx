import { Typography } from 'antd';
import { type TextProps } from 'antd/es/typography/Text';
import React, { type ReactNode } from 'react';

interface iText extends TextProps {
  text: string | ReactNode;
}

const Text = (props: iText): ReactNode => {
  const { text, ...rest } = props;
  const { Text } = Typography;
  return <Text {...rest}>{text}</Text>;
};

export default Text;
