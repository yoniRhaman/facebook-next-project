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
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const passElement = useRef(null);
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const json = Object.fromEntries(formData);
      const [profile, baver] = await Promise.all([
        await handleUpload(formData.get("profileImg")),
        await handleUpload(formData.get("baverImg")),
      ]);
      json["profileImg"] = profile;
      json["baverImg"] = baver;
      json["freinds"] = [];
      json["posts"] = [];
      const response = await register(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleUpload = async (image) => {
    const storageRef = ref(storage, `images/${image.name}`);
    const result = await uploadBytes(storageRef, image);
    return await getDownloadURL(result.ref);
  };

  return (
    <div className="container-Register">
      <div className="signup-container column ">
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
                error={passwordError}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={(e) => {
                  if (e.target.value !== passElement.current.value) {
                    setPasswordError("Passwords dont match");
                  } else {
                    setPasswordError("");
                  }
                }}
                helperText={passwordError}
              />
            </div>
            <div>
              <label htmlFor="birthDate">Date of Birth:</label>
              <input type="date" id="birthDate" name="birthDate" required />
            </div>
            <div className="gender-container column  ">
              <label htmlFor="gender">gender:</label>
              <div>
                <label>Male</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label>Female</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  required
                />
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

            <div>
              <label htmlFor="profileImg">profileImg:</label>
              <input type="file" label="profileImg" name="profileImg" />
            </div>
            <div>
              <label htmlFor="baverImg">baverImg:</label>
              <input type="file" label="baverImg" name="baverImg" />
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
            <Link href={"/Login"}>You have account ? Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
