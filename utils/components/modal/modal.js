import { useState } from "react";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import "./modal.css";

export default function Modal({ onClose }) {
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
          <h1>Create Post</h1>
        </div>

        <div className="column center gap-20">
          <select
            value={postPrivacy}
            onChange={(e) => setPostPrivacy(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
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
            Create Post
          </Button>
        </div>
      </div>
    </div>
  );
}
