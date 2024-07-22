"use client";

import { useState } from "react";

import "./createPost.css"; // Import CSS for styling
import Modal from "../newPostModal/newPostModal"; // Import the modal component

export default function CreatePost() {
  // State to manage the visibility of the Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the Modal when input is clicked
  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="post-page-container">
      {/* Input field to trigger Modal */}
      <input
        className="create-post-input"
        type="text"
        placeholder="What's on your mind?"
        onClick={handleInputClick} // Open the Modal on click
      />
      {/* Conditionally render the Modal if isModalOpen is true */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
