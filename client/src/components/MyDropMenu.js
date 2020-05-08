import React,{useState} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyDrop = ({localID}) =>{
    
  const LoginTrue = styled.section`
  
      font-size:10px;
      margin:0;
      .myMenu{position:relative;}
      .myMenu>li{
            display:inline-block;
        }
      .welcome{
          border: 1px solid #ff8a3d;
          border-radius: 20px;
          font-weight: bold;
          text-align: center;
          height:20px;
          width: 50px;
          line-height:20px;
          color: #ff8a3d; 
      }
      .mouseOver{
            display: block;
            height:30px;
        .dropdown{
            margin-left:7px;
            font-size:12px;
            i{
                right:15px;
            }
        }
      }
      
  `;
    return(<LoginTrue>
    <ul className="myMenu">
        <li className="welcome">
            <span>웰컴</span>
        </li>
        <li className = "mouseOver">
            <span className="dropdown">{localID}님</span>
        </li>
    </ul>
  </LoginTrue>);
}


export default MyDrop;