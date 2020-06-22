import React from 'react';
import styled from 'styled-components';

const Dim = styled.div=`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.6);
    position : fixed;
    div{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    `;


const Popup = ({children}) =>{
    return<Dim>
        <div>
        {children}
        </div>
    </Dim>
}


export default Popup;