import "./sideFreindsMenue.css";

const freinds = [
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb_-bZ0G28ppp5P7bmwuCUDJC8i6IIe44XLjlj-_fHsLSVoZb3kB2758kmA&s",
        name: "Melech Constablier"
    }
]


export default function SideFreindsMenue(){
    return (
        <div className="freinds-box">
           {freinds.map((freind, n) =>(
            <div>
            <FreindItem freind={freind} n={n} />
            </div>
        ))}
    
        </div>
    );
}

function FreindItem({freind, n}){
    return(
        <div>
     <div className={`row freind-item`} >
        <img className="avatar" src={freind.src} alt={freind.name}/>
        <p className="freind-name" >{freind.name}</p>

     </div>
     <hr/>
     </div>
     );
}

