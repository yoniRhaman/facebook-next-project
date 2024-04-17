import Searchicon from "@/utils/components/icons/searchicon";
import "./marketplace.css";

function Marketplace() {
  return (
    <div className="Groups-container column">
      <div className="search-top-container column ">
        <div className="top-container">
          <h1>Groups</h1>
        </div>
        <div className="containe-search1 search-input1  ">
          <Searchicon />
          <input type="text" name="search" placeholder="Search groups" />
        </div>
      </div>
      <div className="pick-middle-container">
        <button>
          <p>Your feed</p>
        </button>
        <button>
          <p>Discover</p>
        </button>
        <button>
          <p>Your groups</p>
        </button>
      </div>
      <div className="manage-bottom-container"></div>
    </div>
  );
}

export default Marketplace;
