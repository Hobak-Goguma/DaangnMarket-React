import React from "react";
import { ButtonWrapper } from "./style";

const Button = ({ text, ...rest }) => {
  return <ButtonWrapper {...rest}>{text}</ButtonWrapper>;
};

export default Button;
