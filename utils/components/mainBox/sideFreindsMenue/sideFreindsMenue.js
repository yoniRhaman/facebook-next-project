'use client';
import { getUserData } from "@/utils/api/signinApi";
import "./sideFreindsMenue.css";
import { getTwentyFreinds } from "@/utils/api/freinds";
import { getCookies } from "cookies-next";

// const freinds = [
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },
//     {
//         id: "1234",
//         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
//         name: "Melech Constablier"
//     },

// ]

const freinds =  getTwentyFreinds(getCookies("uid"));



export default function SideFreindsMenue() {
    return (
        <div className="friends-box">
            {freinds.map((friend, n) => (
                <FriendItem friend={friend} key={n} />
            ))}
        </div>
    );
}

function FriendItem({ friend }) {
    return (
        <div className="friend-item">
            <img className="avatar" src={"/"} alt={friend.name} />
            <p className="friend-name">{friend.name}</p>
        </div>
    );
}




