import React, { useEffect, useState } from "react";
import Wishlist from "../components/Wishlist";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const WishlistContainer = () => {
  const interest = useSelector((state) => state.interest.interest);
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {}, []);

  const fetchList = () => {
    fetch(
      `http://www.daangn.site/product/${localStorage.getItem("productId")}
        `
    )
      .then((res) => res.json())
      .then((res) => {
        setWishlists([...wishlists, res]);
      });
  };

  return (
    <div>
      <Wishlist wishlists={wishlists} />
      <button onClick={fetchList}>Add</button>
    </div>
  );
};

export default WishlistContainer;
