"use client";
// Import necessary modules and components
import Image from "next/image";
import "./marketgrid.css";
import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { SortProducts } from "./sortProducts";
import Link from "next/link";
import { useProductContext } from "@/utils/contexts/productContext";
import { CategoryContext } from "@/utils/contexts/categoryContext";

// Define the marketgrid component
export default function marketgrid({ productsFromServer }) {
  // State for managing search input and sorting option
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);
  
  // Context to manage products and shared category
  const { products, setProducts } = useProductContext();
  const { sharedCategory } = useContext(CategoryContext);

  // Update products state when productsFromServer changes
  useEffect(() => {
    setProducts(productsFromServer);
  }, [setProducts, productsFromServer]);

  // Filter and sort products based on search input, category, and sorting option
  const finale_products = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => p.category.includes(sharedCategory))
    .sort((a, b) => SortProducts(a, b, sortBy))
    .map((product) => <GridItem key={nanoid()} product={product} />);

  return (
    <div className="my-body column">
      <div className="toolsbar row">
        <div className="selectContainer row">
          {/* Dropdown for sorting options */}
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
          {/* Search input field */}
          <input
            type="text"
            name="textfild"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid-container">
        {/* Render filtered and sorted products */}
        {finale_products}
      </div>
    </div>
  );
}

// Define the GridItem component
export function GridItem({ product }) {
  return (
    <Link
      href={`marketplace/${product._id}`}
      className="grid_item column"
      style={{
        width: "100%",
      }}
    >
      <div className="myimg">
        <div className="imges center">
          {/* Display product image with a blur effect */}
          <Image
            className="back-img"
            src={product.mainImage}
            alt="Product Image"
            fill
            style={{ objectFit: "cover", filter: "blur(5px)" }}
          />
          <div className="main-img">
            {/* Display product image without blur effect */}
            <img className="curent-img"
              src={product.mainImage}
              alt="Product Image"
            />
          </div>
        </div>
      </div>
      <div className="container-details row space-between">
        <div className="mytext column">
          {/* Display product details */}
          <h3 className="price-text">{product.price + "$"}</h3>
          <h3 className="title-text">{product.name}</h3>
          <h3 className="title-text">{product.location}</h3>
        </div>
      </div>
    </Link>
  );
}
