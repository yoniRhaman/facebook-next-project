// "use client";
// import { useState } from "react";
// import "./createPost.css";

// // Modal component
// function Modal({ onClose }) {
//   return (
//     <div className="modal-container" onClick={onClose}>
//       <textarea className="modal-container">"What's on your mind?"</textarea>
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
//         className="input-post"
//         placeholder="What's on your mind?"
//         onClick={handleInputClick}
//       />
//       {isModalOpen && <Modal onClose={closeModal} />}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import "./createPost.css";
import { Button } from "@mui/material";

// Modal component
function Modal({ onClose }) {
  const [postContent, setPostContent] = useState(""); // State for textarea content

  return (
    <div className="modal-container" onClick={() => onClose()}>
      <textarea
        className="input-post" // Use the same class for styling
        placeholder="What's on your mind?"
        value={postContent} // Bind value to state
        onChange={(e) => setPostContent(e.target.value)} // Update state on change
        maxLength={1000} // Limit to 1000 characters
      />
      <div className="row modal-buttons">
        <Button variant="contained" onClick={() => onClose()}>
          send
        </Button>
      </div>
    </div>
  );
}

// CreatePost component
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
        className="input-post"
        placeholder="What's on your mind?"
        onClick={handleInputClick}
      />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
