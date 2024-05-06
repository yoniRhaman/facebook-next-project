import { FaPlus } from "react-icons/fa6";
import "./groups.css";
import Searchicon from "../icons/searchicon";

function Groups() {
  return (
    <div className="Groups-container column">
      <div className="search-top-container column gap-20">
        <div className="top-container">
          <h1>Groups</h1>
        </div>
        <div className="search-input1 row center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search groups" />
        </div>
      </div>
      <button className="button-create" role="button">
        <FaPlus />
        Create New Group
      </button>
      <div className="Groups-p center">
        <p>Groups you manage</p>
      </div>

      {new Array(20).fill(0).map((e) => (
        <div className="manage-bottom-container">
          <button className="btn-Groups">
            <img
              src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
              alt="Group"
            />
            <p>My Group</p>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Groups;
