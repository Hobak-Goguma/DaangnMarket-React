import React from "react";
import styled from "styled-components";

const ArrowPrev = (props) => {
  return (
    <Container
      onClick={props.onClick}
      src="/img/arrowLeft.svg"
      style={{ display: props.display }}
    />
  );
};

const Container = styled.img`
  position: absolute;
  left: -6%;
  top: 45%;
  transform: translateY(-50%);
  z-index: 100;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default ArrowPrev;
