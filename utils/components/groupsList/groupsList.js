"use client";
import { FaPlus } from "react-icons/fa";
import "./groupsList.css";
import Searchicon from "../icons/searchicon";
import { useState } from "react"; // Import useState
import CreateGroup from "../createGroup/createGroup";

export default function GroupsList() {
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
      {isModalOpen && <CreateGroup onClose={closeModal} />}{" "}
    </div>
  );
}

