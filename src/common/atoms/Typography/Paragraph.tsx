import { Typography } from 'antd';
import { type ParagraphProps } from 'antd/es/typography/Paragraph';
import React, { type ReactNode } from 'react';

interface iParagraph extends ParagraphProps {
  text: string | ReactNode;
}

const Paragraph = (props: iParagraph): ReactNode => {
  const { text, ...rest } = props;
  const { Paragraph } = Typography;
  return <Paragraph {...rest}>{text}</Paragraph>;
};

export default Paragraph;
