import React from "react";
import styled from 'styled-components';

const RankList = styled.ul`
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
`;

const Rank = () => {

	// map으로 순위 매기기
	const rank = [{
		name: "자전거",
		nowRank: 1,
		prevRank: 1,
	}, {
		name: "의자",
		nowRank: 2,
		prevRank: 4
	}, {
		name: "캠핑",
		nowRank: 3,
		prevRank: 2,
	}, {
		name: "노트북",
		nowRank: 4,
		prevRank: 3
	}, {
		name: "냉장고",
		nowRank: 5,
		prevRank: 5
	}, {
		name: "쇼파",
		nowRank: 6,
		prevRank: 8
	}, {
		name: "화분",
		nowRank: 7,
		prevRank: 9
	}, {
		name: "아이패드",
		nowRank: 8,
		prevRank: 6
	}, {
		name: "아이폰",
		nowRank: 9,
		prevRank: 8
	}, {
		name: "컴퓨터",
		nowRank: 10,
		prevRank: 10
	}, {
		name: "책상",
		nowRank: 11,
		prevRank: 11
	}, {
		name: "시계",
		nowRank: 12,
		prevRank: 15
	}];

	const ranks = rank.slice(0, 7);

	const Ranking = ranks.map((v) => {
		if (v.nowRank < 8) { // 7위까지만 넣기위해
			return (
				<li key={v.name}><a href="#">
					<div><strong>{v.nowRank} </strong>{v.name}</div>
					<div className={v.nowRank === v.prevRank ? `upDown` : v.nowRank
					< v.prevRank ? `upDown up` : `upDown down`}>
						{v.nowRank === v.prevRank ? `-` :
							v.nowRank < v.prevRank ? (
								<><i className="fas fa-caret-up up"></i>{" " + Math.abs(
									v.nowRank - v.prevRank)}</>
							) : (
								<><i className="fas fa-caret-down down"></i>{" " + Math.abs(
									v.nowRank - v.prevRank)}</>
							)}
					</div>
				</a></li>);
		}
	});

	return (
		<RankList>
			<li className="keyword">오늘의 인기 검색어</li>
			{Ranking}
		</RankList>
	);
};

export default Rank;
