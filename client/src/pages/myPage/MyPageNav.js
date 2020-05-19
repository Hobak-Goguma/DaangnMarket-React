import React from "react";
import styled from "styled-components";
const MyNav = ({choose,history}) =>{
    const MyNav = styled.ul`
        position:absolute;
        left:0;
        top:0px;
        width: 200px;
        li{
            box-sizing:border-box;
            width:100%;
            line-height:50px;
            border:1px solid #ccc;
            border-top:0;
            background:#fff;
            cursor:pointer;
            :first-child{
                border-top:1px solid #ccc;
            }
            span{
                display:block;
                padding:5px 25px;
                position:relative;
                font-size:13px;
                i{
                    display: block;
                    position:absolute;
                    right:25px;
                    top:50%;
                    transform:translateY(-50%);
                }
            }
        }
        li.on{
            background:#dcdbde;
        }
    `;
    const click = (v) =>{
        console.log(v.target.id);
        const id = v.target.id;
        switch(id) {
            // case "채팅":
                // history.push("/MyChat");
            //     break;
            case "내 상품":
                history.push("/MyProduct");
                break;

            case "내 정보 수정":
                history.push("/mychange");
                break;

            default:
                break;
        }
    }
    const myMenu = ["채팅", "내 상품","내 동네 설정", "내 정보 수정","로그아웃"]
    const menu = myMenu.map((v)=>{
        if(v===choose){
        return(
            <li key = {v} className="on">
                <span id = {v} onClick={click}>{v}<i className="fas fa-chevron-right"></i></span>
            </li>
        )}
        else{
            return(
                <li key = {v}>
                    <span id = {v}  onClick={click}>{v}<i className="fas fa-chevron-right"></i></span>
                </li>
        );};
    })
    return( 
        <MyNav>
            {menu}
        </MyNav>
    );
}

export default MyNav;