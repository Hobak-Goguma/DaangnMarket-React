import styled, { css } from "styled-components";

const defaultButtonStyle = css`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  align-content: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRegister = styled.div`
  .wrong-txt {
    color: orange;
    font-size: 12px;
    line-height: 1.4;
  }
  .correct-txt {
    color: green;
    font-size: 12px;
  }

  tr,
  td,
  div,
  span,
  p {
    border: 0px solid #ff8a3d;
  }

  input {
    border-radius: 4px;
    border: 1px solid #ccc;

    &.typing {
      font-size: 14px;
      height: 42px;
      text-indent: 20px;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &::placeholder {
      color: #ccc;
    }
  }

  .home-menu {
    letter-spacing: 0;
    cursor: pointer;
  }
  .page-article2 {
    width: 660px;
    margin: 0 auto;
  }
  .write-board2 {
    background: #fff;
  }
  .agree-board {
    background: #fff;
  }
  .contents {
    background: #f9f9f9;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  /* Register Style */

  .head-section {
    background: #f9f9f9;
  }

  .join-title {
    display: flex;
    justify-content: center;
    /* background: #f9f9f9; */
    font-size: 20px;
    margin: 0;
  }

  .gt-symbol {
    line-height: 1;
    margin: 0 5px;
  }

  .page-location {
    margin: 0 auto;
    width: 1050px;
    padding-top: 26px;
    display: flex;
    color: #4c4c4c;
    justify-content: flex-end;
    font-size: 12px;
    letter-spacing: -0.6px;
  }

  .head-notification1 {
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    background: #f9f9f9;
    opacity: 0.8;
  }
  .ghost-tr {
    height: 20px;
  }
  tr {
    height: 60px;
  }
  tr.validate-tr {
    height: unset;
  }
  td {
    vertical-align: middle;
  }
  .col1 {
    width: 120px;
    padding-left: 30px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.8;
  }
  .head-section {
    background: #f9f9f9;
  }
  .final-join {
    background: #f9f9f9;
  }

  .birth-input {
    width: 80px;
    text-align: center;
  }
  .birth-inputs {
    width: 300px;
    display: flex;
    justify-content: center;
  }

  .typing {
    width: 300px;
    height: 40px;
  }

  .normal-button,
  .normal-button-gray,
  .normal-button-white {
    ${defaultButtonStyle}
    background: #ff8a3d;
  }
  .normal-button-gray {
    background: #ddd;
  }
  .normal-button-white {
    color: #ddd;
    background: #fff;
    border: 1px solid #ddd;
  }
  .col2-2 {
    display: flex;
    align-items: center;
  }
  .address {
    margin-top: 15px;
    cursor: pointer;
  }
  .address-hint {
    margin-top: 5px;
    font-size: 12px;
    color: gray;
  }

  .birth-inputs {
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 300px;
    height: 40px;

    .birth-input:focus .birth-inputs {
      border: 1px solid #000;
    }
  }
  .benefit-info {
    width: 323px;
    height: 30px;
  }
  .colbutton {
    margin-left: 10px;
    cursor: pointer;
  }
  .address2 {
    display: flex;
    align-items: flex-start;
    margin-top: 24px;
  }
  .gender.col2 {
    margin-left: -8px;
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin-top: 10px;
  }
  .extra.col2 {
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .ghost-tr {
    height: 20px;
  }
  .agree-board {
    margin-top: 15px;
    padding-top: 25px;
  }
  .agree-head {
    display: flex;
    justify-content: left;
    margin-left: 30px;
    margin-bottom: 15px;
  }
  .agree-note {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-left: 10px;
    color: gray;
  }
  .agree-neck {
    margin-left: 30px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .agree-explanation {
    margin-left: 5px;
  }
  .agree-gray-guide {
    color: gray;
    margin-left: 2px;
  }
  .clasuse {
    margin-left: 20px;
    color: #ff8a3d;
  }
  .agree-body {
    margin-left: 60px;
  }
  .agree-body-line {
    margin-bottom: 10px;
    font-size: 14px;
  }
  .subscription {
    margin-left: 22px;
    font-size: 14px;
  }
  .subscript-detail {
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 14px;
  }
  .final-join {
    display: flex;
    justify-content: center;
    margin: 50px auto 0;
    padding-bottom: 50px;
  }
  .final-button-join {
    width: 340px;
    height: 54px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: #ff8a3d;
    border-radius: 7px;
    border: 0px;
    cursor: pointer;
  }

  .join-start {
    margin-top: 90px;

    input {
      &:focus {
        border: 1px solid #000;
        outline: none;
      }
    }
  }
`;
