"use client";
import Image from "next/image";
import "./marketgrid.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { SortProducts } from "./sortProducts";
import Link from "next/link";
import { useProductContext } from "@/utils/contexts/productContext";


export default function marketgrid({ productsFromServer }) {

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);
  const { products, setProducts } = useProductContext();
  useEffect(() => {
    setProducts(productsFromServer);
  }, [setProducts]);
  const finale_products = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => SortProducts(a, b, sortBy))
    .map((product) => <GridItem id={nanoid()} product={product} />);
  return (
    <div className="my-body column">
      <div className="toolsbar row">
        <div className="selectContainer row">
          <select
            className="select"
            onChange={(e) => setSortBy(parseInt(e.target.value))}
            defaultValue={"0"}
          >
            <option value="0">name asc</option>
            <option value="1">name des</option>
            <option value="2">price asc</option>
            <option value="3">price des</option>
          </select>
        </div>
        <div className="textfildContainer row">
          <input
            type="text"
            name="textfild"
            placeholder="Serch..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid-container">{finale_products}</div>
    </div>
  );
}

export function GridItem({ product }) {
  return (
    <Link
      href={`https://facebook-express-project.onrender.com/marketplace/product${product._id}`}
      className="grid_item column"
      style={{
        // height: "30vh",
        width: "100%",
      }}
    >
      <div className="myimg">
        <div className="imges center">
          <Image
            className="back-img"
            src={product.mainImage}
            alt="Sunset Beach"
            fill
            style={{ objectFit: "cover", filter: "blur(5px)" }}
          />
          <div className="main-img">
            <Image
              src={product.mainImage}
              alt="Sunset Beach"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="mytext column">
        <h3 className="price-text">{product.price + "$"}</h3>
        <h3 className="title-text">{product.name}</h3>
        <h3 className="title-text">{product.location}</h3>
      </div>
    </Link>
  );
}
