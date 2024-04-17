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
      
      <div className="manage-bottom-container">
        <p>Groups you manage</p>
        <button className="btn-Groups"></button>
        <button className="btn-Groups"></button>
        <button className="btn-Groups"></button>
      </div>
    </div>
  );
}

export default Marketplace;
