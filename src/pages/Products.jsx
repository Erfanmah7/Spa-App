import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const myProducts = [
  { id: 1, name: "products-1" },
  { id: 2, name: "products-2" },
  { id: 3, name: "products-3" },
  { id: 4, name: "products-4" },
  { id: 5, name: "products-5" },
];

function Products() {
  return (
    <div>
      <NavBar />
      <h1>Products</h1>
      <ul>
        {myProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
