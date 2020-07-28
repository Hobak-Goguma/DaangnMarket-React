import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useEffect } from "react";
const Dim = styled.div`
    position :fixed;
    background : rgba(0,0,0,0.3);
    width : 100%;
    height : 100vh;
    z-index: 10000;

    div.center{
        position : absolute;
        top : 50%; 
        left : 50%;
        transform: translate(-50%,-50%);
    }
`;
const Dialog = ({children}) =>{

    const dimRef = useRef();
    const Container = React.forwardRef((props,ref)=>{
    return(<Dim ref={ref}>
        <div className="center">{props.children}</div>
    </Dim>);});

    
    useEffect(()=>{
        dimRef.current.addEventListener("wheel",(e)=>{e.preventDefault()},false);
    },[dimRef]);


    return (
    <Container ref={dimRef}>{children}
    </Container>);
} 


export default Dialog;