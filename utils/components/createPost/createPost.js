"use client";

// import { useState } from "react";
// import "./createPost.css";
// import { Button } from "@mui/material";

// // Modal component
// function Modal({ onClose }) {
//   const [postContent, setPostContent] = useState(""); // State for textarea content

//   const handlePostSubmit = () => {
//     // Handle post submission (e.g., send data to server)
//     console.log("Submitted post content:", postContent);
//     onClose(); // Close the modal
//   };

//   return (
//     <div className="modal-container center">
//       <div className="modal-content">
//         <textarea
//           className="input-post"
//           placeholder="What's on your mind?"
//           value={postContent}
//           onChange={(e) => setPostContent(e.target.value)}
//           maxLength={1000}
//         />
//         <Button variant="contained" onClick={handlePostSubmit}>
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// }

// // CreatePost component
// export default function CreatePost() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleInputClick = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         // className="input-post"
//         placeholder="What's on your mind?"
//         onClick={handleInputClick}
//       />
//       {isModalOpen && <Modal onClose={closeModal} />}
//     </div>
//   );
// }
// CreatePost.js
import React, { useState } from "react";

import "./createPost.css"; // Assuming you have a CSS file for styling
import Modal from "../modal/modal";

export default function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="What's on your mind?"
        onClick={handleInputClick}
      />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
