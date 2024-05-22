import "./mainBox.css";
import MainPosts from "./posts/mainPosts";
import SideFreindsMenue from "./sideFreindsMenue/sideFreindsMenue";

export default function MainBox() {
// <<<<<<< HEAD
//     return (
//             <div className="main-box">
//                 <MainPosts />
//                 <SideFreindsMenue />
//             </div>
//     );
// }
// =======
  return (
    <div>
      <div className="main-box">
        <div className="main-box-left">
          <MainPosts />
        </div>
        <div className="main-box-right">
          <SideFreindsMenue />
        </div>
      </div>
    </div>
  );
}

