import React from "react";
import styled from "styled-components";


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
        >div{
            position:relative;
            display: inline-block;
            width: 20%;
            height:317px;
            border:1px solid #ddd;
            margin: 0 50px 50px 0;
            border-radius:20px;
            overflow:hidden;
            &:hover{
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
                -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
                -moz-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
                top: -2px;
            }
        }   
        
        .item{
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
        }
        .more{
            box-sizing:border-box;
            margin-right:0;
            padding: 88px 0;
            div{
                font-size:20px;
                margin: 22px 20px 0 20px;
            }
        }
    }
}
`;

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
        let cost = "";
        const costString=String(v.cost);
        for(let i = 0 ; i <costString.length;i++){ // 3자리마다 , 넣기위하여
            cost += costString[i];
            if((costString.length-1-i)%3===0 &&costString.length-1 !== i){
                cost+=",";
            }
        }

        return(
        <div className="item" key = {v.name}>
            <div className="img">
                <img src={v.thumb} alt={v.name}/> 
            </div>
            <div className="discription">    
                <h1>{v.name}</h1>
                <p>{v.location}</p>
                <p className="price">{v.cost!==0? 
                cost+"원"
                :"무료"}</p>
            </div>
            <div className="like">
                <span>{`관심 ${v.like} ∙ 채팅 ${v.chat}`}</span>
            </div>
        </div>);
    });


    return(
    <Section>
        <div className="container">
            <div className="title">당근마켓 인기 매물</div>
            <section>
                {Items}
                <div className="more">
                    <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/mobile/icon-add-dcfb7aac98f18d19ca4c27e9dc29c63cf73861f3b10e0a42c06163d2658d0691.svg" alt="더보기"/>
                    <div>당근마켓<br/>인기매물 더보기</div>
                </div>
            </section>
        </div>
    </Section>);
}

export default Market;