import React from "react";
import styled from 'styled-components';
const Mains = styled.section`
        width: 100%;
        height: 700px;
        background:#eee;
        .container{
            position :relative;
            width: 980px;
            height:100%;
            margin : 0 auto;
            .title{
                text-align:center;
                padding-top: 187px;
                p{
                    font-size:17px;
                }
                p:first-child{
                    font-size:40px;
                    font-weight:bold;
                    margin-bottom:10px;
                }
            }
            img{
                display:block;
                position:absolute;
                bottom:0;
                left:0px;
            }
            ul{
                display: block;
                width: 200px;
                position: absolute;
                bottom: 50px;
                right: 0px;
                .keyword{
                    height:50px; 
                    border-bottom : 1px solid #ccc;
                    font-size: 20px;
                    font-weight:bold;
                }
                li{
                    display:block;
                    width:100%;
                    font-size:17px;
                    margin-top: 16px;
                    position: relative;
                    a{width:100%;}
                    div{
                        display:inline-block;
                    }
                    .upDown{
                        width:50px;
                        text-align:center;
                        position:absolute;
                        top:0;
                        right:0;
                    }
                }
                .up{color:red;}
                .down{color:blue;}
            }
        }
    `;

const Main = () =>{
    
        // map으로 순위 매기기
        const rank = [{
            name:"자전거",
            nowRank : 1,
            prevRank : 1,
        },{
            name:"의자",
            nowRank : 2,
            prevRank :4 
        },{
            name:"캠핑",
            nowRank : 3,
            prevRank : 2,
        },{
            name:"노트북",
            nowRank : 4,
            prevRank: 3
        },{
            name : "냉장고",
            nowRank : 5,
            prevRank: 5
        },{
            name : "쇼파",
            nowRank : 6,
            prevRank: 8
        },{
            name : "화분",
            nowRank : 7,
            prevRank: 9
        },{
            name : "아이패드",
            nowRank : 8,
            prevRank: 6
        },{
            name : "아이폰",
            nowRank : 9,
            prevRank: 8
        },{
            name : "컴퓨터",
            nowRank : 10,
            prevRank: 10
        },{
            name : "책상",
            nowRank : 11,
            prevRank: 11
        },{
            name : "시계",
            nowRank : 12,
            prevRank: 15
        }];
        const ranks = rank.slice(0,7);
        console.log(rank,ranks);
        const Ranking = ranks.map((v)=>{ 

            if(v.nowRank < 8){ // 7위까지만 넣기위해
            return (
            <li key = {rank.name}><a href="#">
                <div><strong>{v.nowRank} </strong>{v.name}</div> 
                <div className="upDown">
                    {v.nowRank===v.prevRank? `-`:
                        v.nowRank<v.prevRank? (
                        <><span className="up" >^</span>{Math.abs(v.nowRank-v.prevRank)}</>
                        ):(
                        <><span className="down">v</span>{Math.abs(v.nowRank-v.prevRank)}</>
                    )}
                </div>
            </a></li>);}
            else{return(<></>);}
        })


    return(
    <Mains>
        <div className="container">
            <div className="title" key="0">    
                <p>우리 동네 중고 직거래 마켓</p>
                <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
            </div>
            <ul>
                <li className="keyword">오늘의 인기 검색어</li>
                {Ranking}
            </ul>
            <img src="./img/mainpageBgc.png" alt="거래화면"/>
        </div>
    </Mains>);
}


export default Main;