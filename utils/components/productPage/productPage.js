"use client";
import Image from "next/image";
import "./productPage.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { FaTrashCan } from "react-icons/fa6";
import { deleteProductById } from "@/utils/api/marketplaceApi";

function ProductPageComponent({ myProduct }) {
  const id = getCookie("uid");
  const token = getCookie("token");
  const handleDelete = async () => {
    try {
      await deleteProductById(myProduct._id, id, token);
      // Optionally, you can update the local state to remove the deleted product
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };

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
        {myProduct.owner === id && (
          <button className="garbage" onClick={handleDelete}>
            <FaTrashCan />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductPageComponent;
