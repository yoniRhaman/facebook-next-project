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
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCookie } from "cookies-next";
import Cookies from "js-cookie";
import { getAllusers } from "@/utils/api/usersApi";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const [usrId, setUsrId] = useState("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");

  const [isSearchFocused, setIsSearchFocused] = useState(false);



  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value) {
      router.push(value);
    }
  };

  useEffect(() => {
    const url = Cookies.get("profileImg");
    if (url) setProfileImg(url);
    // setProfileImg(getCookie("profileImg"));
  }, []);

  useEffect(() => {
    const uid = Cookies.get("uid");
    setUsrId(uid);
    // setProfileImg(getCookie("profileImg"));
  }, []);

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

  const finale_users = users
  .filter((u) => u.firstName.toLowerCase().includes(search.toLowerCase()) || u.lastName.toLowerCase().includes(search.toLowerCase()))
  .map((user) => (
    <UserItem 
      key={user._id} 
      user={user} 
      onClick={(userId) => router.push(`/profile/${userId}`)}
    />
  ));
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <nav className="nav-container">
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
  {isSearchFocused && search && (
    <div className="user-list">
      {finale_users}
    </div>
  )}
</div>
        </div>
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
      {isNotificationOpen && <div className="notifications"></div>}
    </div>
  );
}

export function UserItem({ user, onClick }) {
  return (
    <div onClick={() => onClick(user._id)} className="user-item row">
      <img src={user.profileImg} className="list-profile-img"></img>
      {user.firstName} {user.lastName}
    </div>
  );
}
