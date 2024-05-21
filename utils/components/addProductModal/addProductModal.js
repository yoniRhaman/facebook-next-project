"use client";
import { Button, TextField } from "@mui/material";
import "./addProductModal.css";
import { Close } from "@mui/icons-material";
import { createProduct } from "@/utils/api/marketplaceApi";
import { useProductContext } from "@/utils/contexts/productContext";

export default function AddProductForm({ setOpen }) {
  const { products, setProducts } = useProductContext();
  async function handleSumbit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = await createProduct([Object.fromEntries(formData)]);
    setProducts((prev) => [...prev, ...product]);
    setOpen(false)
  }

  return (
    <div className="column center navbar-modal">
      <button className="close-button" onClick={() => setOpen(false)}>
        <Close />
      </button>
      <h1>Add new product</h1>

      <form className="column center form gap-20" onSubmit={handleSumbit}>
        <TextField label="name" name="name" />
        <TextField label="price" name="price" />
        <TextField type="file" label="img" />
        <textarea placeholder="Description..." maxLength={200} name="desc" />

        <Button type="submit" variant="contained">
          Add Product
        </Button>
      </form>
    </div>
  );
}
