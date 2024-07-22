"use client";
import { Button, CircularProgress } from "@mui/material";
import "./addProductModal.css";
import { Close } from "@mui/icons-material";
import { createProduct } from "@/utils/api/marketplaceApi";
import { useProductContext } from "@/utils/contexts/productContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebaseConfig";
import { useState } from "react";
import { getCookie } from "cookies-next";

export default function AddProductForm({ setOpen }) {
  const { products, setProducts } = useProductContext(); // Get products and setProducts from context
  const [loading, setLoading] = useState(false); // State for loading spinner

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Show loading spinner

    // Extract form data
    const formData = new FormData(e.target);
    const json = Object.fromEntries(formData); // Convert FormData to JSON

    // Upload main image and additional images
    json["mainImage"] = await handleUpload(formData.get("mainImage"));
    json["images"] = await Promise.all(
      formData.getAll("images").map(async (img) => await handleUpload(img))
    );
    json["owner"] = getCookie("uid"); // Set owner from cookie

    // Create product and update the product context
    const product = await createProduct(json, getCookie("token"));
    setProducts((prev) => [...prev, product]);

    setLoading(false); // Hide loading spinner
    setOpen(false); // Close the modal
  }

  // Handle file upload to Firebase Storage
  const handleUpload = async (image) => {
    const storageRef = ref(storage, `images/${image.name}`);
    const result = await uploadBytes(storageRef, image);
    return await getDownloadURL(result.ref); // Get download URL for the uploaded image
  };

  return (
    <div className="column center navbar-modal">
      <button className="close-button" onClick={() => setOpen(false)}>
        <Close />
      </button>
      <h1>Add new product</h1>

      <form className="column center form gap-20" onSubmit={handleSubmit}>
        {/* Product category selection */}
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
        {/* Product name input */}
        <input
          name="name"
          className="inp-product"
          placeholder="name"
        />
        {/* Product price input */}
        <input
          name="price"
          className="inp-product"
          placeholder="price"
        />
        {/* Main image input */}
        <input
          type="file"
          name="mainImage"
          required
        />
        {/* Additional images input */}
        <input
          type="file"
          name="images"
          multiple
          required
        />
        {/* Location textarea */}
        <textarea
          placeholder="location..."
          maxLength="200"
          name="location"
        ></textarea>
        {/* Description textarea */}
        <textarea
          placeholder="Description..."
          maxLength="200"
          name="description"
        ></textarea>
        {/* Submit button with loading spinner */}
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
