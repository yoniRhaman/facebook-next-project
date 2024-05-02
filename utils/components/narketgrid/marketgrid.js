"use client";
import Image from "next/image";
import "./marketgrid.css";
import { product_list } from "./marketgriddata";
import { nanoid } from "nanoid";
import { useState } from "react";
import { SortProducts } from "./sortProducts";

export default function marketgrid() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);
  const finale_products = product_list
    .filter((p) => p.title.includes(search))
    .sort((a, b) => SortProducts(a, b, sortBy))
    .map((product) => <GridItem id={nanoid()} product={product} />);
  return (
    <div>
      <div className="my-body"></div>
      <div className="toolsbar">
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
        <div className="textfildContainer">
          <input
            type="text"
            className="textfild"
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
    <div className="grid_item column">
      <div className="myimg">
        <Image
          src={product.img}
          alt="img"
          width={205}
          height={137}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="mytext column">
        <h3 className="price-text">{product.price + "$"}</h3>
        <h3 className="title-text">{product.title}</h3>
        <h3 className="title-text">{product.location}</h3>
      </div>
    </div>
  );
}
