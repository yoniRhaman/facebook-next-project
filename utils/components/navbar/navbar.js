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
import FacebookIcon from "../../icons/facebookicon";
import Searchicon from "../../icons/searchicon";
import { AiTwotoneBell } from "react-icons/ai";
import { AiTwotoneMessage } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
            href="/"
            indicatorColor="white"
            icon={<Home style={{ color: "white" }} />}
          />
          <Tab href="/" icon={<OndemandVideo style={{ color: "white" }} />} />
          <Tab
            href="/marketplace"
            icon={<Storefront style={{ color: "white" }} />}
          />
          <Tab href="/groups" icon={<People style={{ color: "white" }} />} />
          <Tab href="/" icon={<SmartButton style={{ color: "white" }} />} />
        </Tabs>
      </div>

      <div className="container-right">
        <button className="icon-button">
          <TbGridDots /> {/* No need to specify size here */}
        </button>
        <Link href="/messages" passHref>
          <button className="icon-button">
            <AiTwotoneMessage />
          </button>
        </Link>
        <button className="icon-button">
          <AiTwotoneBell />
        </button>
        <Link href="/profile" passHref>
          <button className="profile-button">
            <Image
              src="/images/profile-men.jpg"
              fill
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
            <div className="profile-overlay">
              <BsArrowDownCircleFill />
            </div>
          </button>
        </Link>
      </div>
    </nav>
  );
}
