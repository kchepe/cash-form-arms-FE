import { Typography } from 'antd';
import { type TitleProps } from 'antd/es/typography/Title';
import React, { type ReactNode } from 'react';

interface iTitle extends TitleProps {
  text: string | ReactNode;
}

const Title = (props: iTitle): ReactNode => {
  const { text, ...rest } = props;
  const { Title } = Typography;
  return <Title {...rest}>{text}</Title>;
};

export default Title;
