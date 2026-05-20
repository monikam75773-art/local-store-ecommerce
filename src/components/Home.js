import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./style.css";

import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Soap",
    price: 380,
    image: "/images/soap.jpg",
  },

  {
    id: 2,
    name: "Shampoo",
    price: 390,
    image: "/images/shampoo.jpg",
  },

  {
    id: 3,
    name: "Toothpaste",
    price: 400,
    image: "/images/toothpaste.jpg",
  },

  {
    id: 4,
    name: "Toothbrush",
    price: 150,
    image: "/images/toothbrush.jpg",
  },
];

const Home = ({ cart, addToCart }) => {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <nav className="navbar">

        <h1>Local Store</h1>

        <button
          className="login-btn"
          onClick={() => navigate("/cart")}
        >
          Cart ({cart.length})
        </button>

      </nav>

      <div className="hero">

        <h2>Local Store E-commerce Platform</h2>

        <p>
          Browse and purchase products online from your local vendors.
        </p>

        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="grid">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />

        ))}

      </div>

    </div>
  );
};

export default Home;