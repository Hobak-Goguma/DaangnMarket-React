import React from "react";
import styled from "styled-components";
const PasswordDiv = styled.div`
    .check{
        cursor:pointer;
        padding: 10px;
        display: inline-block;
        input{
            margin-right:10px;
        }
    }
`;
const Password = ({changeValue,change}) =>{

    return <PasswordDiv>
        <input></input>
        <input></input>
        <input></input>
    </PasswordDiv>;
}


export default Password;