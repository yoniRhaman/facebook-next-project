// import "./createPost.css";
// export default function CreatePost() {
//   return (
//     <div>
//       <input
//         type="text"
//         className="input-post"
//         placeholder="What's on your mind?"
//       />
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import "./createPost.css";

// Modal component
function Modal({ onClose }) {
  return (
    <div className="modal-container" onClick={onClose}>
      <textarea className="modal-container">"What's on your mind?"</textarea>
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

