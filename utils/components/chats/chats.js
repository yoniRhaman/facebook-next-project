import Searchicon from "../../icons/searchicon";
import "./chats.css";
export default function Chats() {
  return (
    <div className="chats-container column">
      <div className="search-top-container ">
        <div className="top-container">
          <h1>Chats</h1>
        </div>
        <div className=" search-input1 row center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search Messenger" />
        </div>
      </div>
      {new Array(20).fill(0).map((e) => (
        <button className="btn-chats-Messenger row center gap-20">
          <button className="btn-chats-img">
            <img
              src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
              alt="משהו"
            />
          </button>
          <p>what we are say</p>
        </button>
      ))}
    </div>
  );
}
