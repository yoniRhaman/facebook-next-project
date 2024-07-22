"use client";
// Import necessary modules and components
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
import { AiTwotoneBell, AiTwotoneMessage } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCookie } from "cookies-next";
import Cookies from "js-cookie";
import { getAllusers } from "@/utils/api/usersApi";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

// Define the Navbar component
export default function Navbar() {
  // State to manage notification visibility
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  // State to store the profile image URL
  const [profileImg, setProfileImg] = useState("");
  // State to store the user ID
  const [usrId, setUsrId] = useState("");
  // State to store search query
  const [search, setSearch] = useState("");
  // State to store list of users
  const [users, setUsers] = useState([]);
  // Router instance for navigation
  const router = useRouter();
  // State to manage the selected tab value
  const [selectedValue, setSelectedValue] = useState("");
  // State to manage search input focus
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Handle search input change and navigate based on input
  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value) {
      router.push(value);
    }
  };

  // Fetch and set profile image from cookies
  useEffect(() => {
    const url = Cookies.get("profileImg");
    if (url) setProfileImg(url);
    // setProfileImg(getCookie("profileImg")); // Commented out alternative approach
  }, []);

  // Fetch and set user ID from cookies
  useEffect(() => {
    const uid = Cookies.get("uid");
    setUsrId(uid);
    // setProfileImg(getCookie("profileImg")); // Commented out alternative approach
  }, []);

  // Fetch all users and set users state
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = getCookie("token");
        const usersData = await getAllusers(token);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [setUsers]);

  // Filter and map users based on search query
  const finale_users = users
    .filter(
      (u) =>
        u.firstName.toLowerCase().includes(search.toLowerCase()) ||
        u.lastName.toLowerCase().includes(search.toLowerCase()),
    )
    .map((user) => (
      <UserItem
        key={user._id}
        user={user}
        onClick={(userId) => router.push(`/profile/${userId}`)}
      />
    ));

  // State to manage the selected tab
  const [value, setValue] = useState("one");

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <nav className="nav-container">
        {/* Left section of the navbar */}
        <div className="center nav-left row">
          <FacebookIcon />
          <div className="search-container">
            <div className="containe-search search-input row center">
              <Searchicon />
              <input
                type="text"
                name="search"
                placeholder="Search Facebook"
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
            </div>
            {/* Display search results when search input is focused and has a query */}
            {isSearchFocused && search && (
              <div className="user-list">{finale_users}</div>
            )}
          </div>
        </div>

        {/* Middle section of the navbar with tabs */}
        <div className="middel-nav center">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab
              href="/"
              indicatorcolor="white"
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

        {/* Right section of the navbar */}
        <div className="container-right">
          {/* Button for more options */}
          <button className="icon-button">
            <TbGridDots />
          </button>
          {/* Button to navigate to messages */}
          <Link href="/messages" passHref>
            <button className="icon-button">
              <AiTwotoneMessage />
            </button>
          </Link>
          {/* Button for notifications */}
          <button className="icon-button">
            <AiTwotoneBell />
          </button>
          {/* Button to navigate to user profile */}
          <Link href={`/profile/${usrId}`}>
            <button className="profile-button">
              <Image
                src={profileImg}
                alt="Picture of the author"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="profile-overlay">
                <BsArrowDownCircleFill />
              </div>
            </button>
          </Link>
        </div>
      </nav>
      {/* Conditional rendering of notifications */}
      {isNotificationOpen && <div className="notifications"></div>}
    </div>
  );
}

// Define the UserItem component
export function UserItem({ user, onClick }) {
  return (
    <div onClick={() => onClick(user._id)} className="user-item row">
      <img src={user.profileImg} className="list-profile-img" alt="User profile" />
      {user.firstName} {user.lastName}
    </div>
  );
}
