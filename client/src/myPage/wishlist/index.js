import React, { useState } from "react";
import { connect } from "react-redux";
import { setNewList } from "../../redux/actions/wishlist";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Wishlist = ({ wishlist }) => {
  dayjs.extend(relativeTime);
  const [wishData, setWishData] = useState(wishlist);

  const handleDelete = (idx) => {
    const temp = [...wishData];
    temp.splice(idx, 1);
    setWishData(temp);
  };

  return (
    <WishlistWrapper>
      <div className="list-container">
        {wishData.map((list, i) => (
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
              <i
                className="fas fa-heart"
                style={{ color: " #ff8a3d", marginTop: 15, cursor: "pointer" }}
                onClick={() => handleDelete(i)}
              />
            </div>
          </div>
        ))}
      </div>
    </WishlistWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist,
  };
};

export default connect(mapStateToProps, { setNewList })(Wishlist);

const WishlistWrapper = styled.div`
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
