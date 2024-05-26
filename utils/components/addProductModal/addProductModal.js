"use client";
import { Button, CircularProgress, TextField, colors } from "@mui/material";
import "./addProductModal.css";
import { Close, Height } from "@mui/icons-material";
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
    const json = Object.fromEntries(formData);
    console.log(json);
    json["mainImage"] = await handleUpload(formData.get("mainImage"));
    json["images"] = await Promise.all(
      formData.getAll("images").map(async (img) => await handleUpload(img))
    );

    const product = await createProduct([json]);
    setProducts((prev) => [...prev, ...product]);
    setLoading(false);
    setOpen(false);
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
        <select>
          <option value="vehicles">Vehicles</option>
          <option value="property-rentals">Property Rentals</option>
          <option value="apparel">Apparel</option>
          <option value="classifieds">Classifieds</option>
          <option value="electronics">Electronics</option>
          <option value="entertainment">Entertainment</option>
          <option value="family">Family</option>
          <option value="free-stuff">Free Stuff</option>
          <option value="garden-outdoor">Garden & Outdoor</option>
          <option value="hobbies">Hobbies</option>
        </select>
        <TextField label="name" name="name" />
        <TextField label="price" name="price" />
        <input type="file" label="img" name="mainImage" required />
        <input
          type="file"
          label="more images"
          name="images"
          multiple
          required
        />

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
