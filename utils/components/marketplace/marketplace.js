import "./marketplace.css";
import Searchicon from "@/utils/components/icons/searchicon";
import { FaCar } from "react-icons/fa6";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { IoMdShirt } from "react-icons/io";
import { IoPricetags } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { GiGardeningShears } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";
function Marketplace() {
  return (
    <div className="marketplace-container column">
      <div className="search-top-container column ">
        <div>
          <h1>Marketplace</h1>
        </div>
        <div className=" search-input1 row   center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search groups" />
        </div>
      </div>
      <hr />
      <div className="Categories-container">
        <div className="Categories-p">
          <p>Categories</p>
        </div>
        <div className="Categories column">
          <button className="btn-categories">
            <div className="iconCategories">
              <FaCar className="icon-categories" />
            </div>
            <h3>Vehicles</h3>
          </button>
          <button className="btn-categories">
            <div className="iconCategories">
              <BsFillHouseCheckFill className="icon-categories" />
            </div>
            <h3>Property Rentals</h3>
          </button>
          <button className="btn-categories">
            <div className="iconCategories">
              <IoMdShirt className="icon-categories" />
            </div>
            <h3>Apparel</h3>
          </button>
          <button className="btn-categories">
            <div className="iconCategories">
              <IoPricetags className="icon-categories" />
            </div>
            <h3>Classifieds</h3>
          </button>
          <button className="btn-categories">
            <div className="iconCategories">
              <IoPhonePortrait className="icon-categories" />
            </div>
            <h3>Electronics</h3>
          </button>
          <button className="btn-categories">
            <div className="iconCategories">
              <BiCameraMovie className="icon-categories" />
            </div>
            <h3>Entertainment</h3>
          </button>
          <button className="btn-categories">
            <div className="iconCategories">
              <FaHeart className="icon-categories" />
            </div>
            <h3>Family</h3>
          </button>

          <button className="btn-categories">
            <div className="iconCategories">
              <TbFreeRights className="icon-categories" />
            </div>
            <h3>Free Stuff</h3>
          </button>
          <button className="btn-categories">
            <div className="iconCategories">
              <GiGardeningShears className="icon-categories" />
            </div>
            <h3>Garden & Outdoor</h3>
          </button>
          <button className="btn-categories">
            <div className="iconCategories">
              <FaBaseballBatBall className="icon-categories" />
            </div>
            <h3>Hobbies</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
