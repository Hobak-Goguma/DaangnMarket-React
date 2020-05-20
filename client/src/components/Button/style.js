import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border: none;
  width: 100%;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  background-color: ${(props) => props.theme.primaryColor};
  :hover {
    background-color: ${(props) => props.theme.primaryDarker};
  }
  text-align: center;
  padding: 0.5rem 0;
  cursor: pointer;
`;
