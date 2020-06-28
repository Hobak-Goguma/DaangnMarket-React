import React, { useState } from "react";
import ProductDetail from "../components/productDetail";
import Layout from "../common/components/Layout";

const ProductDetailContainer = () => {
  const [isModal, setModal] = useState(false);
  return (
    <Layout
      overflow={isModal ? "hidden" : "unset"}
      height={isModal ? "100vh" : "unset"}
    >
      <ProductDetail isModal={isModal} setModal={setModal} />
    </Layout>
  );
};

export default ProductDetailContainer;
 