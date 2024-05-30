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
import { getCookie } from "cookies-next";

export default function AddProductForm({ setOpen }) {
  const { products, setProducts } = useProductContext();
  const [loading, setLoading] = useState(false);

  async function handleSumbit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const json = Object.fromEntries(formData);
    // console.log(json);
    json["mainImage"] = await handleUpload(formData.get("mainImage"));
    json["images"] = await Promise.all(
      formData.getAll("images").map(async (img) => await handleUpload(img))
    );
    json["owner"] = getCookie("uid");

    const product = await createProduct(json, getCookie("token"));
    setProducts((prev) => [...prev, product]);
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
        <select name="category">
          <option value="Vehicles">Vehicles</option>
          <option value="Apparel">Apparel</option>
          <option value="Property Rentals">Property Rentals</option>
          <option value="Classifieds">Classifieds</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Family">Family</option>
          <option value="Free Stuff">Free Stuff</option>
          <option value="Garden & Outdoor">Garden & Outdoor</option>
          <option value="Hobbies">Hobbies</option>
        </select>
        <input
          label="name"
          name="name"
          className="inp-product"
          placeholder="name"
        />
        <input
          label="price"
          name="price"
          className="inp-product"
          placeholder="price"
        />
        <input type="file" label="img" name="mainImage"  required />
        <input
          type="file"
          label="more images"
          name="images"
          multiple
          required
        />

        <textarea
          placeholder="location..."
          maxLength="200"
          name="location"
        ></textarea>
        <textarea
          placeholder="Description..."
          maxLength="200"
          name="description"
        ></textarea>
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
