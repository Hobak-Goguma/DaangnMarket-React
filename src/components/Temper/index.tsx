import React from 'react';
import styled from 'styled-components';

interface TemperProps {
  user: {
    name: string;
    nickname: string;
    addr: string;
    img: string;
    temper: string;
  };
}

const StyledWrapper = styled.div`
  position: absolute;
  right: 0;
  padding-right: 36px;
`;

const StyledTemperatureWrapper = styled.dl`
  display: block;
  width: 100px;

  dt {
    position: absolute;
    top: 36px;
    right: 0;
    font-size: 12px;
    line-height: 1;
    letter-spacing: -0.6px;
    color: #868e96;
  }

  dd {
    color: #319e45;
    position: absolute;
    right: 30px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.5px;
    margin-top: 1px;
  }
`;

const StyledMeter = styled.div`
  display: block;
  width: 100px;
  background-color: #e9ecef;
  height: 4px;
  border-radius: 100px;
  position: relative;
  margin-top: 24px;
  clear: both;
`;

const StyledTemperBar = styled.div<{ temper: string }>`
  background-color: #319e45;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 4px;
  border-radius: 100px;
  width: ${({ temper }) => `${temper}%`};
`;

const StyledTemperFace = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: url('https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set@2x-0bece009c619b4706f52a750aca82448334aa3e39d353579f2ce9c365639a03b.png')
    no-repeat;
  background-position: 0 -99px;
  background-size: 29px 147px;
  width: 24px;
  height: 24px;
`;

const Temper: React.FC<TemperProps> = ({ user }) => {
  return (
    <StyledWrapper>
      <StyledTemperatureWrapper>
        <dt>매너온도</dt>
        <dd>{user.temper}°C</dd>
      </StyledTemperatureWrapper>
      <StyledMeter>
        <StyledTemperBar temper={user.temper} />
      </StyledMeter>
      <StyledTemperFace></StyledTemperFace>
    </StyledWrapper>
  );
};

export default Temper;
