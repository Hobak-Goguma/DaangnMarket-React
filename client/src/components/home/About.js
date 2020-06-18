import React from "react";
import styled from "styled-components";

    const Abouts = styled.section`
    background:#eee;
        .container{
            .title{
                padding-top:100px;
                padding-bottom:50px;
                text-align : center; 
                position:relative;
                font-size:32px;
                &::before{
                    content:"";
                    position:absolute;
                    bottom:0;
                    left:50%;
                    transform:translateX(-50%);
                    width:80px;
                    height:2px;
                    background-color:#FF8A3D;
                }
            }
            article{
                margin-top: 80px;
                text-align:center;
                .descript{
                    width:230px;
                    display:inline-block;
                    margin : 0 ${(980 - 230*3)/2}px 100px 0;
                    &:nth-child(3n){
                        margin-right:0;
                    }
                    h1{
                        margin-top:30px;
                        font-size:20px;
                    }

                }
            }
        }
    `;

const About =() =>{
    const descriptions = [{
        idx:0,
        title:"동네 인증",
        des:`설정한 동네를 인증한
        주민만 거래할 수 있어요.`,
    },{
        idx:1,
        title:"거래 매너 온도",
        des:`거래하기 전, 프로필에 있는
        매너 온도를 확인해보세요.`
    },{
        idx:2,
        title:"1:1 채팅하기",
        des:`거래할 상대방과 부담 없이
        대화할 수 있어요.`
    },{
        idx:3,
        title:"가격 하락 알림",
        des:`관심 게시물의 가격이 떨어지면
        가격 하락 알림을 받을 수 있어요.`
    },{
        idx:4,
        title:"나눔의 날",
        des:`매월 11일, 안쓰는 물건을 나누고
        이웃과 추억도 공유해 보세요.`
    },{
        idx:5,
        title:"감사 인사",
        des:`거래 후에는 서로에게
        감사인사를 보내보세요.`
    }];
    
    const Deses = descriptions.map((v)=>{
        const Image = styled.div`
            width:230px;
            height:230px;
            background:url("https://www.daangn.com/assets/home/base/icon-set-50e8f0ea464db3f581f26893911142973cff6fedc7c2c917725338ddd47f5648.png");
            background-position: -0px ${0-230*v.idx}px;
        `;
        return(
        <div className="descript" key ={v.idx}>
            <Image/>
            <h1>{v.title}</h1>
            <p>{v.des}</p>
        </div>);
    });


    return(<Abouts>
        <div className="container">
            <div className="title">
                당근마켓은 이런 점이 달라요!
            </div>
           <article>{Deses}</article>
        </div>
    </Abouts>);
}

export default About;