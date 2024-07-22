"use client";
import CloseIcon from "@mui/icons-material/Close";
import "./Register.css";
import { useRef, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebaseConfig";
import Link from "next/link";
import { register } from "@/utils/api/loginApi";

function RegisterForm() {
  // State for handling loading and password errors
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // Reference to password input field
  const passElement = useRef(null);

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const json = Object.fromEntries(formData);

      // Upload images and get their URLs
      const [profile, baver] = await Promise.all([
        handleUpload(formData.get("profileImg")),
        handleUpload(formData.get("baverImg")),
      ]);

      // Update form data with image URLs
      json["profileImg"] = profile;
      json["baverImg"] = baver;
      json["freinds"] = []; // Initialize friends and posts as empty
      json["posts"] = [];

      // Register the user
      await register(json);
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setLoading(false);
    }
  }

  // Handle file upload to Firebase Storage
  const handleUpload = async (image) => {
    if (!image) return ""; // Handle case where no image is selected

    const storageRef = ref(storage, `images/${image.name}`);
    const result = await uploadBytes(storageRef, image);
    return await getDownloadURL(result.ref);
  };

  return (
    <div className="container-Register">
      <div className="signup-container column">
        <div className="top-Register-container center space-between">
          <div className="container-sign-up">
            <h1>Sign Up</h1>
            <p>It's quick and easy</p>
          </div>
          <CloseIcon className="close-icon" />
        </div>
        <hr />
        <div className="middle1-Register-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                ref={passElement}
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={(e) => {
                  if (e.target.value !== passElement.current.value) {
                    setPasswordError("Passwords don't match");
                  } else {
                    setPasswordError("");
                  }
                }}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <div>
              <label htmlFor="birthDate">Date of Birth:</label>
              <input type="date" id="birthDate" name="birthDate" required />
            </div>
            <div className="gender-container column">
              <label htmlFor="gender">Gender:</label>
              <div className="gender-select row">
                <div className="row select">
                  <label>Male</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    required
                  />
                </div>
                <div className="row select">
                  <label>Female</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    required
                  />
                </div>
                <div className="row select">
                  <label>Other</label>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="profileImg">Profile Image:</label>
              <input type="file" id="profileImg" name="profileImg" />
            </div>
            <div>
              <label htmlFor="baverImg">Banner Image:</label>
              <input type="file" id="baverImg" name="baverImg" />
            </div>
            <div className="create-account">
              <Button type="submit" variant="contained">
                {loading ? (
                  <CircularProgress sx={{ color: "white" }} />
                ) : (
                  "Create account"
                )}
              </Button>
            </div>
          </form>
          <div className="have-account center">
            <Link href={"/"}>Already have an account? Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
