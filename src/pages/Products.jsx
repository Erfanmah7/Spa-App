import React from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const myProducts = [
  { id: 1, name: "products-1" },
  { id: 2, name: "products-2" },
  { id: 3, name: "products-3" },
  { id: 4, name: "products-4" },
  { id: 5, name: "products-5" },
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  console.log(searchParams.toString()); //sortBy=price&order=des
  console.log({ sortBy, order }); //{ sortBy: "price", order: "des" }

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };

  const sortHandler = () => {
    setSearchParams({ sortBy: "asc", order: "sale" });
  };

  return (
    <div>
      <NavBar />
      <h1>Products</h1>
      <button onClick={sortHandler}>Sort</button>
      <ul>
        {myProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={clickHandler}>Go Home</button>
    </div>
  );
}

export default Products;
