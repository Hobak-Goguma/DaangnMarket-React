import React from "react";
import styled from "styled-components";
import CardItem from "../Item";

const Section = styled.section`
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		.more{
				position:relative;
				width: calc(25% - 34px);
				height:280px;
				border:1px solid #ddd;
				border-radius:20px;
				margin: 34px 0 0;
				box-sizing:border-box;
				padding: 88px 0;
				&:hover{
						box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
						-webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
						-moz-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
						top: -2px;
				}
				img {
						display: block;
						margin: 0 auto;
				}
				div{
						font-size:20px;
						text-align: center;
						line-height: 1.43;
						margin: 22px 20px 0 20px;
				}
		}
}
`;

const CardList = (props) => {
	const Items = props.list.map(v => {
		return (
			<CardItem item={v}/>);
	});

	return (
		<Section>
					{Items}
					<div className="more">
						<img
							src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/mobile/icon-add-dcfb7aac98f18d19ca4c27e9dc29c63cf73861f3b10e0a42c06163d2658d0691.svg"
							alt="더보기"/>
						<div>당근마켓<br/>인기매물 더보기</div>
					</div>
		</Section>);
};

export default CardList;
