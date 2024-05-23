"use client";
import "./marketplace.css";
import Searchicon from "@/utils/icons/searchicon";
import { FaCar } from "react-icons/fa6";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { IoMdShirt } from "react-icons/io";
import { IoPricetags } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { GiGardeningShears } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddProductForm from "../addProductModal/addProductModal";

function Marketplace() {
  const [open, setOpen] = useState(false);
  // const handleModalOpen = () => {
  //   setShowModal(true);
  // };
  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  const renderCategories = () => {
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

    return categories.map((category, index) => (
      <button key={index} className="btn-categories">
        <div className="iconCategories">
          <category.icon className="icon-categories" />
        </div>
        <h3>{category.label}</h3>
      </button>
    ));
  };

  return (
    <div className="marketplace-container column">
      <div className="search-top-container column">
        <div className="p center">
          <h1>Marketplace</h1>
        </div>
        <div className="search-input1 row center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search product..." />
        </div>
      </div>
      <hr />
      <div className="Categories-container column center">
        <button className="add row center" onClick={() => setOpen(true)}>
          add product <AddIcon />
        </button>
        <div className="Categories-p">
          <p>Categories</p>
        </div>
        <div className="Categories column">{renderCategories()}</div>
      </div>
      {open && <AddProductForm setOpen={setOpen} />}
    </div>
  );
}
export default Marketplace;
