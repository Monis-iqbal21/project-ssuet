"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import product from "../../../components/allproduct-components/product_array/product";
import "./proDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const item = product.find((p) => p.id === parseInt(id)); // Match the product by ID

  if (!item) {
    return <div>Product not found</div>; // Handle invalid product IDs
  }

  return (
    <div className="product_container">
      <div className="product_image_div">
        <Image
          src={item.image}
          alt={item.name}
          className="pro_img"
          width={300}
          height={300}
        />
      </div>

      <div className="product_detail">
        <h1 className="pro_title">{item.name}</h1>
        <p className="pro_desc">{item.description}</p>
        <p className="pro_desc">{item.category}</p>
        <p>{item.detail}</p>
        <h3 className="pro_price">₹ {item.price}</h3>
        <button className="pro_btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
