"use client";
import { Close } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import "./createGroup.css";
import Image from "next/image";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUserFreinds } from "@/utils/api/freindsApi";

export default function createChat({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState([]);
  const [profileImg, setProfileImg] = useState("");

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
    // setProfileImg(getCookie("profileImg"));
  }, []);

  async function handlegroupSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const json = Object.fromEntries(formData);
      json["owner"] = getCookie("uid");
      const participants = formData.getAll("participants");
      json["participants"] = participants;
// כאן לכתוב await!!!
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      onClose();
    }
  }

  return (
    <div className="modal-container center column">
      <div className="">
        <button className="title-container-button  " onClick={onClose}>
          <Close />
        </button>
        <div className="title-container ">
          <h1>Create Chat</h1>
        </div>
      </div>
      <form onSubmit={handlegroupSubmit}>
        <div className="column center gap-20">
          <div className="picture">
            <Image
              src={profileImg}
              fill
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
          </div>
          <select
            placeholder="Choose Friends"
            className="inp-group"
            multiple
            name="participants"
          >
            {friends.map((friend) => {
              return (
                <option key={friend._id} value={friend._id}>
                  {friend.firstName} {friend.lastName}
                </option>
              );
            })}
          </select>
        </div>
        <div>
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
