"use client";
import { Button, CircularProgress, TextField, colors } from "@mui/material";
import "./addProductModal.css";
import { Close } from "@mui/icons-material";
import { createProduct } from "@/utils/api/marketplaceApi";
import { useProductContext } from "@/utils/contexts/productContext";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "@/utils/services/firebaseConfig";
import { useState } from "react";

export default function AddProductForm({ setOpen }) {
  const { products, setProducts } = useProductContext();
  const [loading, setLoading] = useState(false);

  async function handleSumbit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const imageUrl = await handleUpload(formData.get("mainImage"));
    console.log(imageUrl);
    formData.set("mainImage", imageUrl);
    const product = await createProduct([Object.fromEntries(formData)]);
    setProducts((prev) => [...prev, ...product]);
    console.log(products[products.length - 1]);
    ref(storage, "images/");
    setLoading(false);
    setOpen(false)
  }

  const handleUpload = async (image) => {
    const storageRef = ref(storage, `images/${image.name}`);
    const result = await uploadBytes(storageRef, image);
    return await getDownloadURL(result.ref);
  };

  return (
    <div className="column center navbar-modal">
      <button className="close-button" onClick={() => setOpen(false)}>
        <Close />
      </button>
      <h1>Add new product</h1>

      <form className="column center form gap-20" onSubmit={handleSumbit}>
        <TextField label="name" name="name" />
        <TextField label="price" name="price" />
        <TextField type="file" label="img" name="mainImage" />
        <textarea placeholder="location..." maxLength={200} name="location" />
        <textarea
          placeholder="Description..."
          maxLength={200}
          name="description"
        />
        <Button type="submit" variant="contained">
          {loading ? (
            <CircularProgress sx={{ color: "white" }} />
          ) : (
            "Add Product"
          )}
        </Button>
      </form>
    </div>
  );
}
