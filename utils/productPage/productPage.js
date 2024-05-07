"use client";
import Image from "next/image";
import "./product.css";
import { product_list } from "@/utils/components/marketgrid/marketgriddata.js";
import { usePathname } from "next/navigation";

function ProductPageComponent() {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/product");
  const lastPathPart = pathnameParts[pathnameParts.length - 1];

  const myProduct = product_list.find((p) => p.id === lastPathPart);

  // console.log("product_list:", product_list);
  // console.log("lastPathPart:", lastPathPart);
  // console.log(" myProduct title:", myProduct?.title);

  return (
    <div className="my-body row">
      <div className="imges center">
        <Image
          className="back-img"
          src={myProduct.img}
          alt="Sunset Beach"
          width={830}
          height={520}
          objectFit="fill"
          style={{ filter: "blur(5px)" }}
        />
        <div className="main-img">
          <Image
            src={myProduct.img}
            alt="Sunset Beach"
            width={800}
            height={533}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="details column">
        <div className="all-imges">
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
        </div>
        <div className="my-text column">
          <div className="title">{myProduct.name}</div>
          <div className="price">{myProduct.price}</div>
          <div className="location">{myProduct.location}</div>
          <div className="description">{myProduct.description}</div>
        </div>
        <button className="chat">sss</button>
      </div>
    </div>
  );
}

export default ProductPageComponent;
