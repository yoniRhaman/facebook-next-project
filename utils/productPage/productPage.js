"use client";
import Image from "next/image";
import "./product.css";
import { product_list } from "@/utils/components/marketgrid/marketgriddata.js";
import { usePathname } from "next/navigation";

function ProductPageComponent() {

  return (
    <div className="my-body row">
      <div className="imges center">
        <Image
          className="back-img"
          src="https://negativespace.co/wp-content/uploads/2024/04/negative-space-sunset-beach-wallpaper-1536x1023.jpg"
          alt="Sunset Beach"
          width={830}
          height={520}
          objectFit="fill"
          style={{ filter: "blur(5px)" }}
        />
        <div className="main-img">
          <Image
          src="https://negativespace.co/wp-content/uploads/2024/04/negative-space-sunset-beach-wallpaper-1536x1023.jpg"
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
          <div className="title">Green Table</div>
          <div className="price">500</div>
          <div className="location">Haifa</div>
          <div className="description">
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic cently with de.
          </div>
        </div>
        <button className="chat">sss</button>
      </div>
    </div>
  );
}

export default ProductPageComponent;
