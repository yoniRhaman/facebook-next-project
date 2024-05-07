"use client";
import { Close, Image } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./createGroup.css";
export default function CreateGroup({ onClose }) {
  const handlePostSubmit = () => {
    onClose();
  };

  return (
    <div className="modal-container center column">
      <div className="modal-content space-between column">
        <button className="title-container-button column " onClick={onClose}>
          <Close />
        </button>
        <div className="title-container column  row gap-20">
          <h1>Create Group</h1>
        </div>
        <div className="column center gap-20">
          <div className="picture">
            <Image
              src="/images/profile-men.jpg"
              fill
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
          </div>
          <input type="text" placeholder="Group Name"></input>
          <input type="text" placeholder="Choose Friends"></input>
        </div>
        <div>
          <Button
            sx={{ width: "100%", marginTop: "20px" }}
            variant="contained"
            onClick={handlePostSubmit}
          >
            Create Group
          </Button>
        </div>
      </div>
    </div>
  );
}
