import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Rank from "../components/Rank";
import CardList from "../components/Card/List";

const Mains = styled.section`
		.main-banner {
        width: 100%;
        height: 600px;
        background:#eee;
        .container{
            height:100%;
            .title{
                text-align:center;
                padding-top: 96px;
                p{
                    font-size:17px;
                }
                p:first-child{
                    font-size:40px;
                    font-weight:bold;
                    margin-bottom:20px;
                }
            }
            img{
                display:block;
                position:absolute;
                bottom:0;
                left:0;
            }
            ul{
                display: block;
                width: 200px;
                position: absolute;
                bottom: 50px;
                right: 0;
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
                        strong {
                        font-weight: bold;
                        margin-right: 4px;
                        }
                    }
                    .upDown{
                        width:50px;
                        text-align:center;
                        position:absolute;
                        top:0;
                        right:0;
                        font-size: 12px;
                        i {
                        margin-right: 4px;
                        }
                    }
                }
                .up{color:red;}
                .down{color:blue;}
            }
        }
    }
    .card-section {
        padding: 80px 0;
        .container{
            .title{
                text-align:center;
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
        }
    }
    .about-section {
        background:#eee;
        .container{
            .title{
                padding-top:80px;
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
                padding: 40px 0 80px;
                text-align:center;
                .descript{
                    width:230px;
                    display:inline-block;
                    margin : 40px ${(980 - 230 * 3) / 2}px 0 0;
                    &:nth-child(3n){
                        margin-right:0;
                    }
                    &:nth-child(-n + 3){
                        margin-top:0;
                    }
                    h1{
                        margin: 30px 0 12px;
                        font-size:20px;
                    }
                    p {
                      line-height: 1.43;
                      word-break: keep-all;
                    }

                }
            }
        }
    }
    .review-section {
        .container{
            padding: 80px 0 100px;
            .title{
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
                padding: 26px 0 0 40px;
                display:inline-block;
                vertical-align:top;
                position:relative;
                margin : 80px ${(980 - 300 * 3) / 2}px 0 0;
                font-size:16px;
                line-height: 1.43;
                letter-spacing: -0.33px;
                &:nth-child(-n+4){
                    margin-top: 0;
                }
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
    }
`;

const HomePage = ({history}) => {
	const itemData = [
		{
			pk: 1,
			name: "접이식자전거",
			addr: "인천 연수구 송도동",
			img: "./img/접이식자전거.jpg",
			price: 20000,
			like: 5,
			chat: 40
		}, {
			pk: 2,
			name: "캠핑 테이블",
			addr: "경기도 시흥시 능곡동",
			img: "./img/캠핑 테이블.jpg",
			price: 5000,
			like: 5,
			chat: 25
		}, {
			pk: 3,
			name: "TV모니터 32인치",
			addr: "경기도 고양시 일산서구 주엽동",
			img: "./img/TV모니터 32인치.jpg",
			price: 15000,
			like: 5,
			chat: 28
		}, {
			pk: 4,
			name: "창고정리 예초기 전기톱",
			addr: "서귀포시 서귀동",
			img: "./img/예초기.jpg",
			price: 60000,
			like: 3,
			chat: 30
		}, {
			pk: 5,
			name: "4단 선반",
			addr: "제주 제주시 연동",
			img: "./img/4단선반.jpg",
			price: 25000,
			like: 23,
			chat: 35
		}, {
			pk: 6,
			name: "전자렌지",
			addr: "울산 중구 우정동",
			img: "./img/전자렌지.jpg",
			price: 20000,
			like: 6,
			chat: 34
		}, {
			pk: 7,
			name: "김치냉장고",
			addr: "제주 제주시 삼도1동",
			img: "./img/김치냉장고.jpg",
			price: 100000,
			like: 2,
			chat: 29
		}, {
			pk: 8,
			name: "싱거 재봉틀 싱거미싱기",
			addr: "서울 송파구 잠실3동",
			img: "./img/미싱.jpg",
			price: 25000,
			like: 14,
			chat: 24
		}, {
			pk: 9,
			name: "화분무료드림",
			addr: "경기도 구리시 갈매동",
			img: "./img/화분.jpg",
			price: 0,
			like: 3,
			chat: 11
		}
	];

	const descriptions = [{
		idx: 0,
		title: "동네 인증",
		des: `설정한 동네를 인증한
        주민만 거래할 수 있어요.`,
	}, {
		idx: 1,
		title: "거래 매너 온도",
		des: `거래하기 전, 프로필에 있는
        매너 온도를 확인해보세요.`
	}, {
		idx: 2,
		title: "1:1 채팅하기",
		des: `거래할 상대방과 부담 없이
        대화할 수 있어요.`
	}, {
		idx: 3,
		title: "가격 하락 알림",
		des: `관심 게시물의 가격이 떨어지면
        가격 하락 알림을 받을 수 있어요.`
	}, {
		idx: 4,
		title: "나눔의 날",
		des: `매월 11일, 안쓰는 물건을 나누고
        이웃과 추억도 공유해 보세요.`
	}, {
		idx: 5,
		title: "감사 인사",
		des: `거래 후에는 서로에게
        감사인사를 보내보세요.`
	}];

	const reviews = [{
		idx: 0,
		address: "부산 부전제1동",
		review: `요즘 미니멀라이프 실천 중인데 당근마켓만한 앱이 없어요! 미니멀리즘을 위한 앱이랄까요?ㅎㅎ 동네 직거래라 쉽고 간편해서 너무 좋아요^^ 중고거래에 빠져있답니다❤︎`,
	}, {
		idx: 1,
		address: "대전 둔산2동",
		review: `당근에서 거래하는 재미에 쏙 빠졌어요~ 안쓰는 물건 나눔하고 피드백 받는 경험도 너무 좋았어요~ 동네라서 정말 편해요. 넘나 애정하는 어플 응원할게요! `
	}, {
		idx: 2,
		address: "울산 삼산동",
		review: `여기는 모랄까 돈 버는 것이 목적이 아닌 이웃들과 안 쓰는 물건들을 공유하고 정을 주고받는 동네 장터 같아요. 거래할 때마다 이웃의 정을 느낄 수 있어 좋았답니다.`
	}, {
		idx: 3,
		address: "제주 노형동",
		review: `요즘 매일 쓰는 벼룩 앱이에요:) 근처 주민이라 믿을만하고 쉽게 거래할 수 있어요~ 동네에서 올라오는 매물 구경하는 맛에 완전 중독됐어요!! 진짜 안써본 사람은 몰라요 ㅋㅋ`
	}, {
		idx: 4,
		address: "인천 주안1동",
		review: `집에 있는 안 쓰는 물건 팔기 좋아요 :) 동네 사람들이랑 직거래할 수 있어서 소소한 물건 팔기 좋아요! `
	}, {
		idx: 5,
		address: "광명 철산3동",
		review: `믿을 수 있고, 무엇보다 직거래할 수 있어서 편하네요! 좋은 물건들이 거래되다 보니 중독성도 은근 강함 ㅋㅋ 놓칠까 봐 자꾸 들여다보게 되네요.`
	}, {
		idx: 6,
		address: "광주 관천동",
		review: `아나바다 운동하는 것 같아서 좋아요ㅎ 저한텐 필요 없는 물건이 필요한 사람에게 전달될 수 있는 공간을 열어주셔서 감사합니다!`
	}, {
		idx: 7,
		address: "분당 정자동",
		review: `동네에서 바로 직거래하니까 사기 걱정도 없고 좋네요 ^^ 동네 사람들이니까 신뢰도 가고 가끔 쿨매 나오면 좋아요 ~~`
	}, {
		idx: 8,
		address: "서울 잠실3동",
		review: `근처에 있는 사람들끼리 거래하니까 뭔가 더 믿을 수 있는 것 같아요. 동네에서 바로 직거래할 수 있는 물건만 볼 수 있어 좋은 것 같아요.`
	}];

	const Deses = descriptions.map((v) => {
		const Image = styled.div`
            width:230px;
            height:230px;
            background:url("https://www.daangn.com/assets/home/base/icon-set-50e8f0ea464db3f581f26893911142973cff6fedc7c2c917725338ddd47f5648.png");
            background-position: -0px ${0 - 230 * v.idx}px;
        `;
		return (
			<div className="descript" key={v.idx}>
				<Image/>
				<h1>{v.title}</h1>
				<p>{v.des}</p>
			</div>);
	});

	const revSection = reviews.map((v) => {
		return (<div key={v.idx} className="review">
			<div className="icon"></div>
			{v.review}<span>{` - ` + v.address}</span>
		</div>);
	});

	return (
		<Layout>
			<Mains>
				{/* 메인 및 랭킹 section */}
				<div className="main-banner">
					<div className="container">
						<div className="title" key="0">
							<p>우리 동네 중고 직거래 마켓</p>
							<p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
						</div>
            <Rank history={history}/>
						<img src="./img/mainpageBgc.png" alt="거래화면"/>
					</div>
				</div>
				{/* 아이템 card section */}
				<div className="card-section">
					<div className="container">
						<div className="title">당근마켓 인기 매물</div>
						<CardList list={itemData}/>
					</div>
				</div>
				{/* 당근마켓 특징 설명 section */}
				<div className="about-section">
					<div className="container">
						<div className="title">
							당근마켓은 이런 점이 달라요!
						</div>
						<article>{Deses}</article>
					</div>
				</div>
				{/* App Review section */}
				<div className="review-section">
					<div className="container">
						<div className="title">
							당근마켓 사용자 후기
						</div>
						{revSection}
					</div>
				</div>
			</Mains>
		</Layout>
	);
};

export default HomePage;
