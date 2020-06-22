import React from "react";
import styled from "styled-components";

const Item = styled.div`
    &:nth-child(4n){
        margin-right:0;
    }
    .img{
        width:100%;
        height:50%;
        overflow:hidden;
        img{
            width:100%;
        }
    }
    .discription{
        margin:20px;
        position:relative;
        h1{
            margin-top:20px;
            font-size:18px;
            margin-top:7px;
            white-space : nowrap; 
            text-overflow : ellipsis;
            overflow:hidden;
        }   
        p{ 
            text-align:left;
            font-size:15px;
            margin-top:7px;
            white-space : nowrap; 
            text-overflow : ellipsis;
            overflow:hidden;
        }
        .price{
            color:#FF8A3D;
        }
    }
    .like{
        margin:-5px 10px 5px 10px;
        height:35px;
        border-top:1px solid #ddd;
        text-align:left;
        span{
            display:block;
            margin-top:12px;
            font-size:13px;
            color:#bbb;
        }
    }
`;
const List = ({children:value})=>{
        let cost = "";
        const costString=String(value.cost);
        for(let i = 0 ; i <costString.length;i++){ // 3자리마다 , 넣기위하여
            cost += costString[i];
            if((costString.length-1-i)%3===0 &&costString.length-1 !== i){
                cost+=",";
            }
        }

        return(
        <Item key = {value.name}>
            <div className="img">
                <img src={value.thumb} alt={value.name}/> 
            </div>
            <div className="discription">    
                <h1>{value.name}</h1>
                <p>{value.location}</p>
                <p className="price">{value.cost!==0? 
                cost+"원"
                :"무료"}</p>
            </div>
            <div className="like">
                <span>{`관심 ${value.like} ∙ 채팅 ${value.chat}`}</span>
            </div>
        </Item>);
    
}


export default List;