import React, { useEffect, useState } from "react";
import Wishlist from "../components/Wishlist";
import { useSelector } from "react-redux";

const WishlistContainer = () => {
  const heart = useSelector((state) => state.heartReducer.heart);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (heart) {
      fetch("http://www.daangn.site/product/10")
        .then((res) => res.json())
        .then((res) => {
          setWishlist(res);
          console.log(res);
        });
    }
  }, []);

  return (
    <div>
      <Wishlist />
      {wishlist.name}
    </div>
  );
};

export default WishlistContainer;
