import "./chatBox.css";
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from "@mui/icons-material/Close";
import Searchicon from "../icons/searchicon";


function ChatBox() {
  return (
    <div className="chatBox-container">
      <div className="chatBox-top row">
        <div className="chatBox-left">
          <button className="btn-chatBox-img">
            <img 
              src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
              alt="משהו"
            />
          </button>
          <p>name of profile</p>
        </div>
        <div className="chatBox-right">
          <CloseIcon className="close-icon" />
        </div>
      </div>
      <div className="chatBox-middel"></div>
      <div className="chatBox-button row">
        <button><AddPhotoAlternateIcon className="addPhoto-icon"/></button>
        {/* <button><Addimg/></button> */}
        <div className=" search-input2 row   center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search groups" />
        </div>
        {/* <button><Sendicon/></button> */}
        <button><SendIcon className="sendIcon"/></button>
      </div>
    </div>
  );
}

export default ChatBox;
