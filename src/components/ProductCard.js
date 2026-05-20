import React from "react";

const ProductCard = ({ product, addToCart }) => {

  const handleCart = () => {

    addToCart(product);

    alert(product.name + " added to cart!");
  };

  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.name}
        className="card-image"
      />

      <div className="card-body">

        <h3>{product.name}</h3>

        <p className="price">₹{product.price}</p>

        <p className="desc">
          High-quality {product.name.toLowerCase()} from local vendors.
        </p>

        <div className="btn-group">

          <button
            className="cart-btn"
            onClick={handleCart}
          >
            Add to Cart
          </button>

          <button className="view-btn">
            View
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;