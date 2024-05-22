'use client';
import { getUserData } from "@/utils/api/profileApi";
import "./sideFreindsMenue.css";

const freinds = [
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        id: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    
]


export default function SideFreindsMenue() {
    return (
        <div className="freinds-box">
            {freinds.map((freind, n) => (
                <div>
                    <FreindItem freind={freind} n={n} />
                </div>
            ))}

        </div>
    );
}

function FreindItem({ freind, n }) {
    return (
        <div>
            <button className={`row freind-item`} onClick={() => getUserData(freind.id)}>
                <img className="avatar" src={freind.src} alt={freind.name} />
                <p className="freind-name" >{freind.name}</p>
            </button>
            <hr />
        </div>
    );
}

