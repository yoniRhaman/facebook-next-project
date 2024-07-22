"use client";
// Import necessary modules and components
import "./marketplace.css";
import { nanoid } from "nanoid";
import Searchicon from "@/utils/icons/searchicon";
import { FaCar } from "react-icons/fa6";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { IoMdShirt } from "react-icons/io";
import { IoPricetags, IoPhonePortrait } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { GiGardeningShears } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";
import { useContext, useState } from "react";
import AddProductForm from "../addProductModal/addProductModal";
import { CategoryContext } from "@/utils/contexts/categoryContext";
import { GrAdd } from "react-icons/gr";

// Define the Marketplace component
function Marketplace() {
  // State to manage the visibility of the AddProductForm
  const [open, setOpen] = useState(false);

  // Function to render category buttons
  const renderCategories = () => {
    const { updateSharedCategory } = useContext(CategoryContext);

    // Handle category button click
    const handleClick = (name) => {
      updateSharedCategory(name);
    };

    // Array of categories with their corresponding icons and labels
    const categories = [
      { icon: FaCar, label: "Vehicles" },
      { icon: BsFillHouseCheckFill, label: "Property Rentals" },
      { icon: IoMdShirt, label: "Apparel" },
      { icon: IoPricetags, label: "Classifieds" },
      { icon: IoPhonePortrait, label: "Electronics" },
      { icon: BiCameraMovie, label: "Entertainment" },
      { icon: FaHeart, label: "Family" },
      { icon: TbFreeRights, label: "Free Stuff" },
      { icon: GiGardeningShears, label: "Garden & Outdoor" },
      { icon: FaBaseballBatBall, label: "Hobbies" },
    ];

    // Map categories to buttons
    return categories.map((category) => (
      <button
        key={nanoid()}
        className="btn-categories"
        onClick={() => handleClick(category.label)}
      >
        <div className="iconCategories row">
          <category.icon className="icon-categories" />
          <h3>{category.label}</h3>
        </div>
      </button>
    ));
  };

  return (
    <div className="marketplace-container column">
      <div className="search-top-container column">
        <div className="p center">
          <h1>Marketplace</h1>
        </div>
      </div>
      <div className="Categories-container column">
        {/* Button to open the AddProductForm */}
        <button className="add row center" onClick={() => setOpen(true)}>
          add product <GrAdd />
        </button>
        <div className="Categories-p">
          <p>Categories</p>
        </div>
        <div className="Categories column">
          {/* Render category buttons */}
          {renderCategories()}
        </div>
      </div>
      {/* Conditionally render the AddProductForm if open state is true */}
      {open && <AddProductForm setOpen={setOpen} />}
    </div>
  );
}

export default Marketplace;
