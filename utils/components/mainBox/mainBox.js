import "./mainBox.css";
import MainPosts from "./posts/mainPosts";
import SideFreindsMenue from "./sideFreindsMenue/sideFreindsMenue";


export default function MainBox() {
    return (
        <div>
            
            <div className="main-box">
                <MainPosts />
                <SideFreindsMenue />
            </div>
        </div>
    );
}