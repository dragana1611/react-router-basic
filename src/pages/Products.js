import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2"> Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
        <li>
          <Link to="/products/p4">Product 4</Link>
        </li>
        <li>
          <Link to="/products/p5">Product 5</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
