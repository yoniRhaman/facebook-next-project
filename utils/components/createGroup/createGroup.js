import { Close } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import "./createGroup.css";
import Image from "next/image";
import { createNewGroups } from "@/utils/api/groupsApi";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function CreateGroup({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState([]);
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    const url = Cookies.get("profileImg");
    if (url) setProfileImg(url);
    // setProfileImg(getCookie("profileImg"));
  }, []);

  useEffect(()=>{
    const getFriends = async() => {
      try {
        //find the friends
        //setFriends(result)
      } catch (error) {
        
      }
    };
    getFriends()
  },[])
  async function handlegroupSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const json = Object.fromEntries(formData);
      json["owner"] = getCookie("uid");

      await createNewGroups(json, getCookie("token"));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-container center column">
      <div className="">
        <button className="title-container-button  " onClick={onClose}>
          <Close />
        </button>
        <div className="title-container ">
          <h1>Create Group</h1>
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
          <input
            type="text"
            name="name"
            placeholder="Group Name"
            className="inp-group"
          />
          <select placeholder="Choose Friends" className="inp-group">
            {friends.map((friend) => (
              <option>{friend.name}</option>
            ))}
          </select>
          <div class="inp-img-container">
            <label for="mainImage" class="inp-img-label">
              Choose File
            </label>
            <input
              type="file"
              id="mainImage"
              name="mainImage"
              class="inp-img"
              required
            />
          </div>
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
