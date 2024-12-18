import React from "react";
import './ProductList.scss'
import ProductCard from "../ProductCard/ProductCard";


const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/Frame 33.png",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/Frame 34.png",
  },
];

const ProductList = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
