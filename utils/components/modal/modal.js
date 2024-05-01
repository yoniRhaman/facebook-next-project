// // Modal.js
// "use clinte"
// import React, { useState } from "react";
// import { Button } from "@mui/material";

// export default function Modal({ onClose }) {
//   const [postContent, setPostContent] = useState("");
// //   const [selectPost, setSelectPost] = useState("");

//   const handlePostSubmit = () => {
//     // Handle post submission (e.g., send data to server)
//     console.log("Submitted post content:", postContent);
//     onClose(); // Close the modal
//   };

//   return (
//     <div className="modal-container center">
//       <div className="modal-content ">
//         <div className="title-container center"> <select name="" id=""></select>create post</div>

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
// Modal.js

// import { useState } from "react";
// import { Button } from "@mui/material";

// export default function Modal({ onClose }) {
//   const [postContent, setPostContent] = useState("");
//   const [postPrivacy, setPostPrivacy] = useState("public"); // Default privacy value

//   const handlePostSubmit = () => {
//     onClose(); // Close the modal
//   };

//   return (
//     <div className="modal-container center">
//       <div className="modal-content">
//         <div className="title-container">
//           <select
//             value={postPrivacy}
//             onChange={(e) => setPostPrivacy(e.target.value)}
//           >
//             <option value="public">Public</option>
//             <option value="private">Private</option>
//           </select>
//           Create Post
//         </div>
//         <textarea
//           className="input-post"
//           placeholder="What's on your mind?"
//           value={postContent}
//           onChange={(e) => setPostContent(e.target.value)}
//           maxLength={1000}
//         />
//         {/* <input
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleImageUpload}
//         />
//         {selectedImages.map((image, index) => (
//           <div key={index}>
//             <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
//             <button onClick={() => handleRemoveImage(index)}>Remove</button> */}

//         <Button variant="contained" onClick={handlePostSubmit}>
//           Create Post
//         </Button>
//           </div>
//       </div>
//   );
// }

import React, { useState } from "react";
import { Button } from "@mui/material";
import ImageUploading from "react-images-uploading"; // Import the library
import { Close } from "@mui/icons-material";
import "./modal.css";

export default function Modal({ onClose }) {
  const [postContent, setPostContent] = useState("");
  const [postPrivacy, setPostPrivacy] = useState("public");
  const [selectedImages, setSelectedImages] = useState([]);

  const handlePostSubmit = () => {
    onClose(); // Close the modal
  };

  const onImageUpload = (imageList) => {
    setSelectedImages(imageList);
  };

  return (
    <div className="modal-container center ">
      <div className="modal-content ">
        <div className="title-container row">
          <h1>Create Post</h1>
          <button className="title-container button">
            <Close />
          </button>
        </div>
        {/* <div className="choice row "> */}
        <select
          value={postPrivacy}
          onChange={(e) => setPostPrivacy(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        {/* </div> */}
        <textarea
          className="input-post"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          maxLength={1000}
        />
        <ImageUploading
          multiple
          value={selectedImages}
          onChange={onImageUpload}
        >
          {({ imageList, onImageUpload, onImageRemoveAll }) => (
            <div className="image-upload-container">
              <button onClick={onImageUpload}>Add Image</button>
              {imageList.map((image, index) => (
                <div key={index}>
                  <img src={image.dataURL} alt={`Image ${index}`} />
                  <button onClick={() => onImageRemoveAll(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <Button variant="contained" onClick={handlePostSubmit}>
          Create Post
        </Button>
      </div>
    </div>
  );
}
