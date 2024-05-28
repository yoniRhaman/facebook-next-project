"use client";
import Image from "next/image";
import "./product.css";
import { usePathname } from "next/navigation";

function ProductPageComponent({ myProduct }) {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/product");
  const lastPathPart = pathnameParts[pathnameParts.length - 1];

  // const myProduct = products.find((p) => p._id === lastPathPart);

  const myImagges = myProduct.images.map((i) => (
    <div className="img1">
      <Image src={i} alt="Image" width={120} height={120} objectFit="fill" />
    </div>
  ));
  // console.log("product_list:", product_list);
  // console.log("lastPathPart:", lastPathPart);
  // console.log(" myProduct title:", myProduct?.title);

  return (
    <div className="my-body row">
      <div className="imges center">
        <Image
          className="back-img"
          src={myProduct.mainImage}
          alt="Sunset Beach"
          width={830}
          height={520}
          objectFit="fill"
          style={{ filter: "blur(5px)" }}
        />
        <div className="main-img">
          <Image
            src={myProduct.mainImage}
            alt="Sunset Beach"
            width={1000}
            height={1000}
            objectFit="contain"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="details column">
        <div className="all-imges">{myImagges}</div>
        <div className="my-text column">
          <div className="title">{myProduct.name}</div>
          <div className="price">{myProduct.price}</div>
          <div className="location">{myProduct.location}</div>
          <div className="description">{myProduct.description}</div>
        </div>
        <button className="chat">chat</button>
      </div>
    </div>
  );
}

export default ProductPageComponent;
