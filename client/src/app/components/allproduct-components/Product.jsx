import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./product.css";
import product from "./product_array/product";

const Product = () => {
  console.log(product);
  return product.map((item) => (
    <div className="product" key={item.id}>
      <Link href={`/pages/product/${item.id}`} className="product_link">
        <div className="product_img_div">
          <Image
            src={item.image}
            width={300}
            height={100}
            className="product_img"
            alt="shoes"
          />
        </div>
        <div>
          <p className="status_detail">{item.status}</p>
          <p className="product_name">{item.name}</p>
          <p className="product_gender">{item.category}</p>
          <p className="product_colour"> {item.color}</p>
          <p className="product_price">{item.price}</p>
        </div>
      </Link>
    </div>
  ));
};

export default Product;
