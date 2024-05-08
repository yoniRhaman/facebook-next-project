"use client";

import { useState } from "react";

import "./createPost.css"; // Assuming you have a CSS file for styling
import Modal from "../newPostModal/newPostModal";

export default function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="post-page-container ">
      <input
        className="create-post-input"
        type="text"
        placeholder="What's on your mind?"
        onClick={handleInputClick}
      />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
