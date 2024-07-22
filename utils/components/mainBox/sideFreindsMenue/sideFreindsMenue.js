"use client";

import "./sideFreindsMenue.css";
import { getUserFreinds } from "@/utils/api/freindsApi";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

// Component to display a list of friends
export default function SideFriendsMenu() {
  const [friends, setFriends] = useState([]);

  // Fetch friends data when the component mounts
  useEffect(() => {
    const fetchFriends = async () => {
      // Fetch friends data using token and user ID from cookies
      const friendsData = await getUserFreinds(
        getCookie("token"),
        getCookie("uid")
      );
      setFriends(friendsData); // Update state with the fetched friends data
    };

    fetchFriends();
  }, []);

  return (
    <div className="friends-box">
      {/* Render a list of friends */}
      {friends.map((friend, n) => (
        <FriendItem friend={friend} key={n} />
      ))}
    </div>
  );
}

// Component to display individual friend details
function FriendItem({ friend }) {
  return (
    <Link className="friend-item" href={`/profile/${friend._id}`}>
      <img
        className="avatar"
        src={friend.profileImg}
        alt={`${friend.firstName} ${friend.lastName}`}
      />
      <p className="friend-name">
        {friend.firstName} {friend.lastName}
      </p>
    </Link>
  );
}
