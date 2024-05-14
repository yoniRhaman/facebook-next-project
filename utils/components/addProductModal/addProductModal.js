"use client";
import { Button, TextField } from "@mui/material";
import "./addProductModal.css";
import { Close } from "@mui/icons-material";
export default function AddProductForm({ setOpen }) {
  function handleSumbit(e) {
    e.preventDefault();
  }

  return (
    <div className="column center navbar-modal">
      <button className="close-button" onClick={() => setOpen(false)}>
        <Close />
      </button>
      <h1>Add new product</h1>

      <form className="column center form gap-20" onSubmit={handleSumbit}>
        <TextField label="title" name="title" />
        <TextField label="price" name="price" />
        <TextField type="file" label="img" name="img" />
        <textarea placeholder="Description..." maxLength={200} name="desc" />

        <Button
          type="submit"
          variant="contained"
          onClick={() => setOpen(false)}
        >
          Add Product
        </Button>
      </form>
    </div>
  );
}
