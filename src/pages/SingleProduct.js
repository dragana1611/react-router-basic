import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default SingleProduct;
