import React, { useEffect, useState } from "react";
import Wishlist from "../components/Wishlist";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const WishlistContainer = () => {
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    fetch(
      `http://www.daangn.site/product/${localStorage.getItem("productId")}
        `
    )
      .then((res) => res.json())
      .then((res) => {
        let arr = [];
        localStorage.setItem("productData", JSON.stringify(res));
        let data = JSON.parse(localStorage.getItem("productData"));
        arr.push(data);
        localStorage.setItem("productData", JSON.stringify(arr));

        if (JSON.parse(localStorage.getItem("itemLike")).heart) {
          setWishlists(arr);
        }
      });
  }, []);

  return (
    <div>
      <Wishlist wishlists={wishlists} />
    </div>
  );
};

export default WishlistContainer;
