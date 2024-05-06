"use client";
import { FaPlus } from "react-icons/fa";
import "./groups.css";
import Searchicon from "../icons/searchicon";
import { useState } from "react"; // Import useState
import { Close, Image } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Groups() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize the state

  const handleCreateGroupClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

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
      <button
        className="button-create"
        role="button"
        onClick={handleCreateGroupClick}
      >
        <FaPlus /> Create New Group
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
      {isModalOpen && <NewModal onClose={closeModal} />}{" "}
    </div>
  );
}

export function NewModal({ onClose }) {
  const [postContent, setPostContent] = useState("");
  const [postPrivacy, setPostPrivacy] = useState("public");

  const handlePostSubmit = () => {
    onClose();
  };

  return (
    <div className="modal-container center column">
      <div className="modal-content space-between column">
        <button
          className="title-container-button column center "
          onClick={onClose}
        >
          <Close />
        </button>
        <div className="title-container center row ">
          <h1>Create Group</h1>
        </div>

        <div className="column center gap-20">
          <div className="choice center row gap-20">
            <select
              className="selection"
              value={postPrivacy}
              onChange={(e) => setPostPrivacy(e.target.value)}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
            <div className="picture">
              <Image
                src="/images/profile-men.jpg"
                fill
                alt="Picture of the author"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <textarea
            className="input-post"
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            maxLength={1000}
          />
          <input type="file" multiple />
        </div>
        <div>
          <Button
            sx={{ width: "100%", marginTop: "20px" }}
            variant="contained"
            onClick={handlePostSubmit}
          >
            Create Group
          </Button>
        </div>
      </div>
    </div>
  );
}
