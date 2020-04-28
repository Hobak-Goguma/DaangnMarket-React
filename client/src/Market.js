import React from "react";
import styled from "styled-components";

const Market = () =>{
    const items=[{
        name: "접이식자전거",
        location: "인천 연수구 송도동",
        thumb:"./img/접이식자전거.jpg",
        cost: 20000,
        like: 5,
        chat: 40
    },{
        name: "캠핑 테이블",
        location: "경기도 시흥시 능곡동",
        thumb:"./img/캠핑 테이블.jpg",
        cost: 5000,
        like: 5,
        chat: 25
    },{
        name: "TV모니터 32인치",
        location: "경기도 고양시 일산서구 주엽동",
        thumb:"./img/TV모니터 32인치.jpg",
        cost: 15000,
        like: 5,
        chat: 28
    },{
        name: "창고정리 예초기 전기톱",
        location: "서귀포시 서귀동",
        thumb:"./img/예초기.jpg",
        cost: 60000,
        like: 3,
        chat: 30
    },{
        name: "4단 선반",
        location: "제주 제주시 연동",
        thumb:"./img/4단선반.jpg",
        cost: 25000,
        like: 23,
        chat: 35
    },{
        name: "전자렌지",
        location: "울산 중구 우정동",
        thumb:"./img/전자렌지.jpg",
        cost: 20000,
        like: 6,
        chat: 34
    },{
        name: "김치냉장고",
        location: "제주 제주시 삼도1동",
        thumb:"./img/김치냉장고.jpg",
        cost: 100000,
        like: 2,
        chat: 29
    },{
        name: "싱거 재봉틀 싱거미싱기",
        location: "서울 송파구 잠실3동",
        thumb:"./img/미싱.jpg",
        cost: 25000,
        like: 14,
        chat: 24
    },{
        name: "화분무료드림",
        location: "경기도 구리시 갈매동",
        thumb:"./img/화분.jpg",
        cost: 0,
        like: 3,
        chat: 11
    },]
    const Items = items.map(v=>{
        return(
        <div className="item">
            <img src={v.thumb} alt={v.name}/>
        </div>);
    });
const Section = styled.section`
margin-top:150px;
.container{
    .title{
        text-align:center;
        margin-bottom:130px;
        font-size:32px;
        font-weight:bold;
        position:relative;
        margin-bottom:120px;
        &::before{
            display:block;
            position:absolute;
            left:50%;
            bottom:-60px;
            transform:translateX(-50%);
            content:"";
            width:80px;
            height:2px;
            background-color:#FF8A3D;
        }
    }
    section{
        margin: 0 auto;
        text-align:center;
        .item{
            display: inline-block;
            width: 20%;
            height:40vh;
            background-color: red;
            margin: 0 50px 50px 0;
            border-radius:20px;
            overflow:hidden;
            &:nth-child(4n){
                margin-right:0;
            }
            img{
                width:100%;
            }
        }
        
    }
}
`;

    return(
    <Section>
        <div className="container">
            <div className="title">당근마켓 인기 매물</div>
            <section>
                {Items}
            </section>
        </div>
    </Section>);
}

export default Market;