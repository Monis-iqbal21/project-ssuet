import React from "react";
import Link from "next/link";
import Image from "next/image";
import im from "../../../../public/images/pro3.png";
import "./proDetail.css";

const page = () => {

  
  return (
    <div className="product_container">
      <div className="product_image_div">
        <Image src={im} alt="image" className="pro_img"/>

      </div>

      <div className="product_detail">
        <h1 className="pro_title">Nike Air Force 1 PLT.AF.ORM</h1>
        <p className="pro_desc">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid.
          Its "inside out"-inspired construction, including unique layering and
          exposed foam accents, ups the ante on this timeless Jordan Brand
          silhouette. Details like the deco stitching on the Swoosh add coveted
          appeal, while the unexpected shading, rich mixture of materials and
          aged midsole aesthetic give this release an artisan finish.
        </p>
        <h3 className="pro_price">₹ 8 695.00</h3>
        <button className="pro_btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default page;
