"use client";
import "./navbar.css";
import {
  Home,
  OndemandVideo,
  People,
  SmartButton,
  Storefront,
} from "@mui/icons-material";
import { Tab, Tabs, colors } from "@mui/material";
import FacebookIcon from "../icons/facebookicon";
import Searchicon from "../icons/searchicon";
import { AiTwotoneBell } from "react-icons/ai";
import { AiTwotoneMessage } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav className="nav-container">
      <div className="nav-left row">
        <FacebookIcon />
        <div className="containe-search search-input row center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="middel-nav center">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab
            indicatorColor="white"
            icon={<Home style={{ color: "white" }} />}
          />
          <Tab icon={<OndemandVideo style={{ color: "white" }} />} />
          <Tab icon={<Storefront style={{ color: "white" }} />} />
          <Tab icon={<People style={{ color: "white" }} />} />
          <Tab icon={<SmartButton style={{ color: "white" }} />} />
        </Tabs>
      </div>

      <div className="container-right">
        <button className="icon-button">
          <TbGridDots /> {/* No need to specify size here */}
        </button>
        <button className="icon-button">
          <AiTwotoneMessage />
        </button>
        <button className="icon-button">
          <AiTwotoneBell />
        </button>
        <button className="profile-button">
          <img
            src="/125371365_692859425274779_4351217660566881911_n.jpg"
            alt="Profile"
          />
          <div className="profile-overlay">
            <BsArrowDownCircleFill />
          </div>
        </button>
      </div>
    </nav>
  );
}
