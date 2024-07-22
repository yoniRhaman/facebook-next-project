"use client";

// Import React hook for managing state
import { useState } from "react";

// Define the Popap component
function Popap() {
  // State to manage the visibility of the popup
  const [showPopup, setShowPopup] = useState(false);

  // Toggle the visibility of the popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Handle form submission (currently does nothing)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <>
      {/* Popup container, which is shown or hidden based on state */}
      <div className={`popup-container ${showPopup ? "show" : ""}`}>
        <div className="popup-content">
          {/* Close button to hide the popup */}
          <span className="close-btn" onClick={togglePopup}>
            &times;
          </span>
          <h2>Add Product</h2>
          {/* Form for adding a product */}
          <form id="add-product-form" onSubmit={handleSubmit}>
            {/* Input field for the product title */}
            <label htmlFor="product-title">Title:</label>
            <input
              type="text"
              id="product-title"
              name="product-title"
              required
            />

            {/* Input field for the product price */}
            <label htmlFor="product-price">Price:</label>
            <input
              type="text"
              id="product-price"
              name="product-price"
              required
            />

            {/* Dropdown for selecting the product category */}
            <label htmlFor="product-category">Category:</label>
            <select id="product-category" name="product-category" required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
            </select>

            {/* File input for uploading a product image */}
            <label htmlFor="product-image">Image:</label>
            <input
              type="file"
              id="product-image"
              name="product-image"
              accept="image/*"
              required
            />

            {/* Submit button for the form */}
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>

      {/* Button to open the popup */}
      <button id="open-popup-btn" onClick={togglePopup}>
        Add Product
      </button>
    </>
  );
}

export default Popap;
