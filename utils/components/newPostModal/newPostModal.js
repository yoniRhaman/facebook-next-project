"use client";

// Import necessary modules and components
import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Close } from "@mui/icons-material";
import "./newPostModal.css";
import Image from "next/image";
import { createNewPosts } from "@/utils/api/postsApi";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebaseConfig";
import { getCookie } from "cookies-next";
import Cookies from "js-cookie";
import { usePostContext } from "@/utils/contexts/postContext";

// Define the Modal component
export default function Modal({ onClose }) {
  // State to store the profile image URL
  const [profileImg, setProfileImg] = useState("");
  // Context to manage shared posts
  const { setSharedPosts } = usePostContext([]);
  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Effect to fetch and set profile image from cookies
  useEffect(() => {
    const url = Cookies.get("profileImg");
    if (url) setProfileImg(url);
    // setProfileImg(getCookie("profileImg")); // Commented out alternative approach
  }, []);

  // Handle form submission
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    const formData = new FormData(e.target); // Create FormData object from form submission
    const json = Object.fromEntries(formData); // Convert FormData to JSON object

    // Upload images and update JSON with image URLs
    json["images"] = await Promise.all(
      formData.getAll("images").map(async (img) => await handleUpload(img)),
    );
    json["owner"] = getCookie("uid"); // Add owner ID to JSON

    // Create a new post and update shared posts context
    const post = await createNewPosts(json, getCookie("token"));
    setSharedPosts((prev) => [...prev, post]);
    setLoading(false); // Set loading state to false
    onClose(); // Close the modal
  };

  // Handle image upload to Firebase Storage
  const handleUpload = async (image) => {
    const storageRef = ref(storage, `images/${image.name}`); // Create a reference for the image
    const result = await uploadBytes(storageRef, image); // Upload image
    return await getDownloadURL(result.ref); // Get and return the image URL
  };

  return (
    <div className="modal-container center">
      <div className="modal-content">
        {/* Button to close the modal */}
        <button
          className="title-container-button column center "
          onClick={onClose}
        >
          <Close />
        </button>
        <div className="title-container center ">
          <h1>Create Post</h1>
        </div>

        {/* Form for creating a new post */}
        <form onSubmit={handlePostSubmit} className="column center gap-20">
          <div className="choice center row gap-20">
            {/* Privacy selection dropdown */}
            <select className="selection" name="privacy">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
            {/* Display profile image */}
            <div className="picture">
              <Image
                src={profileImg}
                fill
                alt="Picture of the author"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Textarea for post content */}
          <textarea
            className="input-post"
            placeholder="What's on your mind?"
            name="content"
            maxLength={1000}
          />

          {/* File input for uploading images */}
          <input
            className="img-input"
            type="file"
            name="images"
            style={{ width: "200px" }}
            multiple
          />
          {/* Submit button for creating the post */}
          <Button
            sx={{ width: "100%", marginTop: "20px" }}
            variant="contained"
            type="submit"
          >
            {loading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              "Create Post"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
