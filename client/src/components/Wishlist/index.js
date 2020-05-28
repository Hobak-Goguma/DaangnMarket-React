import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setNewList } from "../../modules/action/wishlist";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Wishlist = ({ wishlist, history, setNewList }) => {
  dayjs.extend(relativeTime);

  return (
    <WishlistWrapper>
      <h2>관심목록</h2>
      <div className="list-container">
        {wishlist.map((list, i) => (
          <div key={i} className="interest">
            <div className="thumb">
              <img
                src={`https://source.unsplash.com/random/${list.pk}`}
                alt="Jungle"
              />
            </div>
            <div className="detail-wrap">
              <p className="list-name">{list.name}</p>
              <p className="list-category">
                {list.category} ∙ <span>{dayjs(Date.now()).fromNow()}</span>
              </p>
              <p className="list-price">
                {parseInt(list.price).toLocaleString()}원
              </p>
            </div>
          </div>
        ))}
      </div>
      <p
        onClick={() => history.goBack()}
        style={{
          position: "absolute",
          top: 100,
          left: 10,
          cursor: "pointer",
        }}
      >
        뒤로가기
      </p>
    </WishlistWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist,
  };
};

export default connect(mapStateToProps, { setNewList })(withRouter(Wishlist));

const WishlistWrapper = styled.div`
  padding-top: 10rem;
  height: 60vh;

  h2 {
    font-size: 1.8rem;
    text-align: center;
  }
  .list-container {
    padding: 10px;
    max-width: 800px;
    margin: 50px auto;

    .interest {
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      display: flex;
      text-align: left;

      .detail-wrap {
        margin-left: 0.8rem;
      }

      .thumb {
        float: left;
        img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 5px;
        }
      }
      .list-name {
        font-size: 1.1rem;
        word-wrap: wrap;
        width: 300px;
        margin-bottom: 0.5rem;
      }
      .list-category {
        font-size: 0.8rem;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      }
      .list-price {
        font-weight: bold;
      }
    }
  }
`;
