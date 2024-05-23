"use client";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./createGroup.css";
import Image from "next/image";

export default function CreateGroup({ onClose }) {
  const handlePostSubmit = () => {
    onClose();
  };

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
      <form onSubmit={handlePostSubmit}>
        <div className="column center gap-20">
          <div className="picture">
            <Image
              src="/images/profile-men.jpg"
              fill
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
          </div>
          <input type="text" placeholder="Group Name" />
          <input type="text" placeholder="Choose Friends" />
        </div>
        <div>
          <Button
            type="submit"
            sx={{ width: "100%", marginTop: "20px" }}
            variant="contained"
            onClick={handlePostSubmit}
          >
            Create Group
          </Button>
        </div>
      </form>
    </div>
  );
}
