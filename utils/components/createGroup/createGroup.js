import { Close } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import "./createGroup.css";
import Image from "next/image";
import { createNewGroups } from "@/utils/api/groupsApi";
import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";

export default function CreateGroup({ onClose }) {
  const [loading, setLoading] = useState(false);

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
              src="/images/profile-men.jpg"
              fill
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
          </div>
          <input type="text" name="name" placeholder="Group Name" className="inp-group" />
          <input
            type="text"
            placeholder="Choose Friends"
            className="inp-group"
          />
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