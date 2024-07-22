"use client";
import { Close } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import "./createGroup.css";
import Image from "next/image";
import { createNewGroups } from "@/utils/api/groupsApi";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUserFreinds } from "@/utils/api/freindsApi";
import { useGroupContext } from "@/utils/contexts/groupContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebaseConfig";

export default function CreateGroup({ onClose }) {
  // State to manage loading state and form data
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState([]);
  const [profileImg, setProfileImg] = useState("");
  const { setlistGroup } = useGroupContext();

  // Fetch friends and profile image URL when component mounts
  useEffect(() => {
    const url = Cookies.get("profileImg");
    if (url) setProfileImg(url);

    const getFriends = async () => {
      try {
        const token = getCookie("token");
        const id = getCookie("uid");
        const friends = await getUserFreinds(token, id);
        setFriends(friends);
      } catch (error) {
        console.error(error);
      }
    };

    getFriends();
  }, []);

  // Handle form submission
  async function handlegroupSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const json = Object.fromEntries(formData);
      json["owner"] = getCookie("uid");
      json["participants"] = formData.getAll("participants");

      // Handle image uploads
      json["images"] = await Promise.all(
        formData.getAll("images").map(async (img) => await handleUpload(img))
      );

      // Create new group and update context
      const group = await createNewGroups(json, getCookie("token"));
      setlistGroup((prev) => [...prev, group]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      onClose();
    }
  }

  // Upload image to Firebase Storage
  const handleUpload = async (image) => {
    const storageRef = ref(storage, `images/${image.name}`);
    const result = await uploadBytes(storageRef, image);
    return await getDownloadURL(result.ref);
  };

  return (
    <div className="modal-container center column">
      <div>
        {/* Close button */}
        <button className="title-container-button" onClick={onClose}>
          <Close />
        </button>
        <div className="title-container">
          <h1>Create Group</h1>
        </div>
      </div>
      <form onSubmit={handlegroupSubmit}>
        <div className="column center gap-20">
          {/* Display profile image */}
          <div className="picture center">
            <Image
              src={profileImg}
              fill
              alt="Profile"
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Input for group name */}
          <input
            type="text"
            name="name"
            placeholder="Group Name"
            className="inp-group center"
          />
          {/* Dropdown to select friends */}
          <select
            placeholder="Choose Friends"
            className="inp-group"
            multiple
            name="participants"
          >
            {friends.map((friend) => (
              <option key={friend._id} value={friend._id}>
                {friend.firstName} {friend.lastName}
              </option>
            ))}
          </select>
          {/* Input for images */}
          <div className="inp-img-container">
            <label htmlFor="images" className="inp-img-label">
              Choose images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              className="inp-img"
              multiple
            />
          </div>
        </div>
        <div>
          {/* Submit button */}
          <Button
            type="submit"
            sx={{ width: "100%", marginTop: "20px" }}
            variant="contained"
          >
            {loading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              "Create Group"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
