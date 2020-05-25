import React from "react";
import styled from "styled-components";

// Mui

const Wishlist = () => {
  return (
    <WishlistWrapper>
      <div className="wishlist-container">
        <h2>관심목록</h2>
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
