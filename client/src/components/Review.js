import React from "react";
import styled from "styled-components";


const Review =() =>{
    const reviews = [{
        idx:0,
        address:"부산 부전제1동",
        review:`요즘 미니멀라이프 실천 중인데 당근마켓만한 앱이 없어요! 미니멀리즘을 위한 앱이랄까요?ㅎㅎ 동네 직거래라 쉽고 간편해서 너무 좋아요^^ 중고거래에 빠져있답니다❤︎`,
    },{
        idx:1,
        address:"대전 둔산2동",
        review:`당근에서 거래하는 재미에 쏙 빠졌어요~ 안쓰는 물건 나눔하고 피드백 받는 경험도 너무 좋았어요~ 동네라서 정말 편해요. 넘나 애정하는 어플 응원할게요! `
    },{
        idx:2,
        address:"울산 삼산동",
        review:`여기는 모랄까 돈 버는 것이 목적이 아닌 이웃들과 안 쓰는 물건들을 공유하고 정을 주고받는 동네 장터 같아요. 거래할 때마다 이웃의 정을 느낄 수 있어 좋았답니다.`
    },{
        idx:3,
        address:"제주 노형동",
        review:`요즘 매일 쓰는 벼룩 앱이에요:) 근처 주민이라 믿을만하고 쉽게 거래할 수 있어요~ 동네에서 올라오는 매물 구경하는 맛에 완전 중독됐어요!! 진짜 안써본 사람은 몰라요 ㅋㅋ`
    },{
        idx:4,
        address:"인천 주안1동",
        review:`집에 있는 안 쓰는 물건 팔기 좋아요 :) 동네 사람들이랑 직거래할 수 있어서 소소한 물건 팔기 좋아요! `
    },{
        idx:5,
        address:"광명 철산3동",
        review:`믿을 수 있고, 무엇보다 직거래할 수 있어서 편하네요! 좋은 물건들이 거래되다 보니 중독성도 은근 강함 ㅋㅋ 놓칠까 봐 자꾸 들여다보게 되네요.`
    },{
        idx:6,
        address:"광주 관천동",
        review:`아나바다 운동하는 것 같아서 좋아요ㅎ 저한텐 필요 없는 물건이 필요한 사람에게 전달될 수 있는 공간을 열어주셔서 감사합니다!`
    },{
        idx:7,
        address:"분당 정자동",
        review:`동네에서 바로 직거래하니까 사기 걱정도 없고 좋네요 ^^ 동네 사람들이니까 신뢰도 가고 가끔 쿨매 나오면 좋아요 ~~`
    },{
        idx:8,
        address:"서울 잠실3동",
        review:`근처에 있는 사람들끼리 거래하니까 뭔가 더 믿을 수 있는 것 같아요. 동네에서 바로 직거래할 수 있는 물건만 볼 수 있어 좋은 것 같아요.`
    }];
    const Review = styled.section`
        .container{
            height:700px;
            .title{
                padding-top:100px;
                padding-bottom:50px;
                margin-bottom:50px;
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
            .review{
                width:260px;
                height:250px;
                padding: 26px 0 0 40px;
                display:inline-block;
                vertical-align:top;
                position:relative;
                margin : 0 ${(980 - 300*3)/2}px 0 0;
                font-size:17px;
                &:nth-child(3n+1){
                    margin-right:0;
                }
                .icon{
                    background:url("https://www.daangn.com/assets/home/base/icon-set-50e8f0ea464db3f581f26893911142973cff6fedc7c2c917725338ddd47f5648.png");
                    background-position: -172px -1380px;
                    width:16px;
                    height:15px;
                    position:absolute;
                    top:0;
                    left:27px;
                }
                span{
                    color:#FF8A3D;
                }
            }
        }
    `;
        
    const revSection = reviews.map((v)=>{
        return(<div key={v.idx} className="review">
            <div className="icon"></div>
            {v.review}<span>{` - `+v.address}</span>
        </div>);
    });


    return(<Review>
        <div className="container">
            <div className="title">
                당근마켓 사용자 후기
            </div>
            {revSection}
        </div>
    </Review>);
}

export default Review;