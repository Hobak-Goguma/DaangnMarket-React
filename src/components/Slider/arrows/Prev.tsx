import React from 'react';
import styled from 'styled-components';

interface ArrowPrevProps {
  display?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const StyledWrapper = styled.img<{ display: boolean }>`
  position: absolute;
  left: -6%;
  top: 45%;
  transform: translateY(-50%);
  z-index: 25;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

const ArrowPrev: React.FC<ArrowPrevProps> = ({ onClick, display = false }) => {
  return (
    <StyledWrapper
      onClick={onClick}
      src="./images/arrowLeft.svg"
      display={display}
    />
  );
};

export default ArrowPrev;
