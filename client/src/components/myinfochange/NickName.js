import React from "react";
import styled from "styled-components";
const NicknameDiv = styled.div`
    .check{
        cursor:pointer;
        padding: 10px;
        display: inline-block;
        input{
            margin-right:10px;
        }
    }
`;
const Nickname = ({changeValue,change}) =>{

    return <NicknameDiv>
    </NicknameDiv>;
}


export default Nickname;