import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
  }
  html {
    width:100%;
    height: 100%;
  }
  body {
    width:100%;
    height: 100%;
    background-color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
  }
  #root {
    width:100%;
    height: 100%;
    > div {
      width:100%;
      height: 100%;
      padding-top: 6rem;
      box-sizing: border-box;
    }
  }
  
  label,
  .btn {
    cursor: pointer;
  }
  a:link {
    color: #4d4d4d;
    text-decoration: none;
  }
  a:visited {
    color: #4d4d4d;
    text-decoration: none;
  }
  a:hover {
    color: #4d4d4d;
  }
  a:active {
    color: #4d4d4d;
    text-decoration: none;
  }
  table a {
    font-size: 12px;
  }
  form,
  img,
  a,
  iframe {
    border-style: none;
  }
  img {
    vertical-align: top;
  }
  .datatable th {
    padding-left: 15px;
    font-weight: normal;
    color: #898989;
    text-align-last: left;
  }
  .container {
    position: relative;
    width: 980px;
    margin: 0 auto;
  }
  .myM .dropMenu {
    display: none;
    border: 1px solid #ccc;
    background: white;
    width: 200px;
    height: 200px;
    position: absolute;
    top: calc(100% + 3px);
    right: 0;
  }
  .dropMenu.active {
    display: block;
  }

  .mt5{
    margin-top:5px;
  }
  .mt10{
    margin-top:10px;
  }
  .mt15{
    margin-top:15px;
  }
  a {
    text-decoration: none;
  }
  input {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
