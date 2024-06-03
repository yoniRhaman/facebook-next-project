"use client";
import CloseIcon from "@mui/icons-material/Close";
import "./Register.css";
import { useRef, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebaseConfig";
import Link from "next/link";
import { register } from "@/utils/api/loginApi";
import { useRouter } from "next/router";
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
      // console.log(json);
      const [profile, baver] = await Promise.all([
        await handleUpload(formData.get("profileImg")),
        await handleUpload(formData.get("baverImg")),
      ]);
      // console.log(profile, baver);
      json["profileImg"] = profile;
      json["baverImg"] = baver;
      json["freinds"] = [];
      json["posts"] = [];
      const response =  await  register(json);
      console.log(response);
             
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
      <div className="signup-container">
        <div className="top-Register-container">
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
              <input
                type="text"
                id="firstName"
                name="firstName"
                // value={formData.firstName}
                // onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                // value={formData.lastName}
                // onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                // value={formData.phoneNumber}
                // onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                ref={passElement}
                type="password"
                id="password"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
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
                // value={formData.confirmPassword}
                // onChange={handleChange}
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
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                // value={formData.birthDate}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="column">
              <div className="gender-container">
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
              <input type="file" label="profileImg" name="profileImg"/>
              <input type="file" label="baverImg" name="baverImg" />
            </div>
            <Button type="submit" variant="contained">
              {loading ? (
                <CircularProgress sx={{ color: "white" }} />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
          <Link href={"/login"}>
            <Button
              sx={{
                background: "green",
              }}
              variant="contained"
            >
              login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
