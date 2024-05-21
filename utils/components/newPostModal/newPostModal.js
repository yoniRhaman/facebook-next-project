"use client";
import { useState } from "react";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import "./newPostModal.css";
import Image from "next/image";
import { createNewPosts } from "@/utils/api/postsApi";

export default function Modal({ onClose }) {
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData));

    await createNewPosts(Object.fromEntries(formData));
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

        <form onSubmit={handlePostSubmit} className="column center gap-20">
          <div className="choice center row gap-20">
            <select className="selection" name="privacy">
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
            name="content"
            maxLength={1000}
          />
          <input type="file" multiple />

          <Button
            sx={{ width: "100%", marginTop: "20px" }}
            variant="contained"
            type="submit"
          >
            Create Post
          </Button>
        </form>
      </div>
    </div>
  );
}
