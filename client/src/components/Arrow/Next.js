import React from "react";
import styled from "styled-components";

const ArrowNext = (props) => {
  return (
    <Container onClick={props.onClick} style={{ display: props.display }} />
  );
};

const Container = styled.div`
  position: absolute;
  right: -6%;
  top: 45%;
  transform: translateY(-50%);
  z-index: 25;
  background-image: url("./img/arrowRight.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default ArrowNext;
