import React from 'react';

import { ButtonWrapper } from './style';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return <ButtonWrapper {...rest}>{text}</ButtonWrapper>;
};

export default Button;
