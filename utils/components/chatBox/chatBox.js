"use client";

import React, { useState } from "react";
import "./chatBox.css";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import Searchicon from "../icons/searchicon";

export default function ChatBox() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="chatBox-container">
      <div className="chatBox-top row center ">
        <div className="chatBox-left center ">
          <button className="btn-chatBox-img center">
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
        <label htmlFor="file-input">
          <AddPhotoAlternateIcon className="addPhoto-icon" />
        </label>
        <input
          className="chatBox-button-input"
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className=" search-input2 row center">
          <Searchicon />
          <input
            type="text"
            name="search"
            placeholder="what would you like to write"
          />
        </div>
        <button>
          <SendIcon className="sendIcon" />
        </button>
      </div>
    </div>
  );
}
