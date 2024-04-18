import Searchicon from "@/utils/components/icons/searchicon";
import { FaPlus } from "react-icons/fa6";
import "./groups.css";
function Groups() {
  return (
    <div className="Groups-container column">
      <div className="search-top-container column ">
        <div className="top-container">
          <h1>Groups</h1>
        </div>
        <div className=" search-input1 row   center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search groups" />
        </div>
      </div>
      <button class="button-create" role="button">
        <FaPlus />
        create new group
      </button>
      <div className="manage-bottom-container">
        <p>Groups you manage</p>
        <button className="btn-Groups">
          <img
            src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
            alt="משהו"
          />
          <p>my group i have</p>
        </button>
        <button className="btn-Groups">
          <img src="" alt="" />
          <p>my group i have</p>
        </button>
        <button className="btn-Groups">
          <img src="" alt="" />
          <p>my group i have</p>
        </button>
      </div>
    </div>
  );
}

export default Groups;
