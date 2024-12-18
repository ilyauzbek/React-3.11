import React from "react";
import './ProductCard.scss'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p className="price">
        ${product.price}{" "}
        {product.oldPrice && (
          <span className="old-price">${product.oldPrice}</span>
        )}
      </p>
      <p className="rating">⭐ {product.rating}/5</p>
    </div>
    
  );
};



export default ProductCard;
