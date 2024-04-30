"use client";

function Popap() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access form data using e.target.elements
    // For example:
    // const formData = new FormData(e.target);
    // const title = formData.get('product-title');
    // const price = formData.get('product-price');
    // const category = formData.get('product-category');
    // const image = formData.get('product-image');
    // Then, you can send this data to your backend or perform any necessary actions
    console.log("Form submitted!");
  };

  return (
    <>
      <div className={`popup-container ${showPopup ? "show" : ""}`}>
        <div className="popup-content">
          <span className="close-btn" onClick={togglePopup}>
            &times;
          </span>
          <h2>Add Product</h2>
          <form id="add-product-form" onSubmit={handleSubmit}>
            <label htmlFor="product-title">Title:</label>
            <input
              type="text"
              id="product-title"
              name="product-title"
              required
            />

            <label htmlFor="product-price">Price:</label>
            <input
              type="text"
              id="product-price"
              name="product-price"
              required
            />

            <label htmlFor="product-category">Category:</label>
            <select id="product-category" name="product-category" required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
            </select>

            <label htmlFor="product-image">Image:</label>
            <input
              type="file"
              id="product-image"
              name="product-image"
              accept="image/*"
              required
            />

            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>

      <button id="open-popup-btn" onClick={togglePopup}>
        Add Product
      </button>
    </>
  );
}

export default Popap;
