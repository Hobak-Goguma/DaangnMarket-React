import React from "react";
import styled from 'styled-components';


const About = () =>{
    const About = styled.section`
        width: 100%;
        height: 700px; 
        .container{
            background-color:red;
            height:700px;
            .title{
                padding-top:50px;
                text-align:center;
                font-size:30px;
                position:relative;
                &::before{
                    content:"";
                    width:200px;
                    height:3px;
                    position:absolute;
                    bottom:0;
                    left:50%;
                    background-color:#FF8A3D;
                    transform:translateX(-50%);
                }
            }
        }
    `;
    return(
    <About>
        <div className="container">
            <div className="title">당근마켓은 이런점이 달라요</div>
        </div>
    </About>);
}

export default About;