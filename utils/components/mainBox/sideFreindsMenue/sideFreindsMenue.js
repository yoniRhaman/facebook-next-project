'use client';
// import { getUserData } from "@/utils/api/signinApi";
import "./sideFreindsMenue.css";
import { getTwentyFreinds, getUserFreinds } from "@/utils/api/freindsApi";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";


// const freinds1 = async () => await getTwentyFreinds(getCookies("uid"), getCookies("token"));


export default function SideFriendsMenu(token, id) {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const friendsData = await getUserFreinds(getCookie("token"), getCookie("uid"));
            setFriends(friendsData);
        };

        fetchFriends();
    }, []);

    return (
    
        <div className="friends-box">
            {friends.map((friend, n) => (
                <FriendItem friend={friend} key={n} />
            ))}
        </div>
    );
}

function FriendItem({ friend }) {
    return (
        <Link className="friend-item" href={`/profile/${friend._id}`}>
            <img className="avatar" src={friend.baverImg} alt={`${friend.firstName} ${friend.lastName}`}/>
            <p className="friend-name">{friend.firstName} {friend.lastName}</p>
        </Link>
    );
}


