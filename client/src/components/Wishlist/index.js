import React, { useState } from "react";
import styled from "styled-components";

// Mui

const Wishlist = ({ listData, wishlists }) => {
  return (
    <WishlistWrapper>
      <div className="wishlist-container">
        <h2>관심목록</h2>
        {wishlists.map((list) => (
          <div>
            <p>{list.name}</p>
            <p>{list.info}</p>
          </div>
        ))}
      </div>
    </WishlistWrapper>
  );
};

export default Wishlist;

const WishlistWrapper = styled.div`
  padding-top: 10rem;
  text-align: center;
  height: 60vh;

  h2 {
    font-size: 1.8rem;
  }
`;
