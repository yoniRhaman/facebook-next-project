import Searchicon from "../icons/searchicon";
import "./chats.css";
function Chats() {
  return (
    <div className="chats-container column">
      <div className="search-top-container column ">
        <div className="top-container">
          <h1>Chats</h1>
        </div>
        <div className=" search-input1 row   center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search Messenger" />
        </div>
      </div>
      <button className="btn-chats-Messenger">
        <button className="btn-chats-img"><img
            src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
            alt="משהו"
          /></button>
        <p>what we are say</p>
      </button>
      <button className="btn-chats-Messenger">
        <button className="btn-chats-img"><img
            src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
            alt="משהו"
          /></button>
        <p>what we are say</p>
      </button>
      <button className="btn-chats-Messenger">
        <button className="btn-chats-img"><img
            src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
            alt="משהו"
          /></button>
        <p>what we are say</p>
      </button>
      <button className="btn-chats-Messenger">
        <button className="btn-chats-img"><img
            src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
            alt="משהו"
          /></button>
        <p>what we are say</p>
      </button>
      <button className="btn-chats-Messenger">
        <button className="btn-chats-img"><img
            src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
            alt="משהו"
          /></button>
        <p>what we are say</p>
      </button>
      <button className="btn-chats-Messenger">
        <button className="btn-chats-img"><img
            src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
            alt="משהו"
          /></button>
        <p>what we are say</p>
      </button>
    </div>
  );
}

export default Chats;
