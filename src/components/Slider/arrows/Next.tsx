import React from 'react';
import styled from 'styled-components';

interface ArrowNextProps {
  display?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const StyledWrapper = styled.img<{ display: boolean }>`
  position: absolute;
  right: -6%;
  top: 45%;
  transform: translateY(-50%);
  z-index: 25;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

const ArrowNext: React.FC<ArrowNextProps> = ({ onClick, display = false }) => {
  return (
    <StyledWrapper
      onClick={onClick}
      src="./images/arrowRight.svg"
      display={display}
    />
  );
};

export default ArrowNext;
