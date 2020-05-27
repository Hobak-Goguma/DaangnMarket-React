import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wishlist = ({ listData, wishlists }) => {
  const [data, setData] = useState([]);

  return (
    <WishlistWrapper>
      <div className="wishlist-container">
        <h2>관심목록</h2>
        {/* {wishlists.map((wishlist) => (
          <div key={wishlist.pk}>{wishlist.name}</div>
        ))} */}
      </div>
    </WishlistWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist,
  };
};

export default connect(mapStateToProps)(Wishlist);

const WishlistWrapper = styled.div`
  padding-top: 10rem;
  text-align: center;
  height: 60vh;

  h2 {
    font-size: 1.8rem;
  }
`;
