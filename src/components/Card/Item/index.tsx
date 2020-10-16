import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CardItemProps {
  item: any;
}

const StyledWrapper = styled.div`
  position: relative;
  width: calc(25% - 34px);
  height: 280px;
  border: 1px solid #ddd;
  margin: 34px 34px 0 0;
  border-radius: 20px;
  background-color: #ffffff;
  overflow: hidden;
`;

const StyledAnchor = styled.a`
  width: 100%;
  height: 100%;
  display: block;
`;

const CardItemArticle = styled.div`
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    top: -2px;
  }

  &:nth-child(4n) {
    margin-right: 0;
  }
  &:nth-child(-n + 4) {
    margin-top: 0;
  }

  .card-item {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    .img {
      width: 100%;
      height: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .text-group {
      width: 100%;
      padding: 20px 16px 0;
      box-sizing: border-box;
      .description {
        width: 100%;
        padding-bottom: 12px;
        position: relative;
        box-sizing: border-box;
        h1 {
          margin: 0 0 8px;
          font-size: 18px;
          text-align: left;
          font-weight: bold;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        p {
          text-align: left;
          color: #868e96;
          font-size: 14px;
          margin: 6px 0 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .price {
          color: #ff8a3d;
          font-size: 15px;
          margin: 0;
        }
      }
      .like {
        width: 100%;
        height: 35px;
        border-top: 1px solid #ddd;
        text-align: left;
        span {
          display: block;
          margin-top: 12px;
          font-size: 13px;
          color: #bbb;
        }
      }
    }
  }
`;

const CardItem: React.FC<CardItemProps> = ({ item }) => {
  let cost = '';
  const costString = String(item.price);
  for (let i = 0; i < costString.length; i++) {
    // 3자리마다 , 넣기위하여
    cost += costString[i];
    if ((costString.length - 1 - i) % 3 === 0 && costString.length - 1 !== i) {
      cost += ',';
    }
  }

  return (
    <StyledWrapper>
      <StyledAnchor href={`/products/${item.id_product}`}>
        <div className="card-item" key={item.name}>
          <div className="img">
            <img src={item.thum_first.image} alt={item.name + '썸네일'} />
          </div>
          <div className="text-group">
            <div className="description">
              <h1>{item.name}</h1>
              <p>{item.addr}</p>
              <p className="price">{item.cost !== 0 ? cost + '원' : '무료'}</p>
            </div>
            <div className="like">
              <span>{`관심 ${item.like ? item.like : 0} ${
                item.chat ? ` ∙ 채팅 ${item.chat}` : ''
              }`}</span>
            </div>
          </div>
        </div>
      </StyledAnchor>
    </StyledWrapper>
  );
};

export default CardItem;
