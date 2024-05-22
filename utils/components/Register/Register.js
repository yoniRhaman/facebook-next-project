"use client";
import CloseIcon from "@mui/icons-material/Close";
import "./Register.css";
import { useState } from "react";
import { sendUserData } from "@/utils/api/profileApi";
import { Button, CircularProgress } from "@mui/material";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebaseConfig";

function RegisterForm() {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   phoneNumber: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    // Convert the FormData object to a plain object (optional)
    // const formObject = {};
    // formData.forEach((value, key) => {
    //   formObject[key] = value;
    // });

    const json = Object.fromEntries(formData);
    console.log(json);
    json["profileImg"] = await handleUpload(formData.get("profileImg"));
    json["baverImg"] = await handleUpload(formData.get("baverImg"));

    // sending the data to server that will send it to mongo
    sendUserData(json);
    setLoading(false);
    // console.log(formObject);
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
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                // value={formData.confirmPassword}
                // onChange={handleChange}
                required
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
                <label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    // checked={formData.gender === 'male'}
                    // onChange={handleChange}
                    required
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    // checked={formData.gender === 'female'}
                    // onChange={handleChange}
                    required
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    // checked={formData.gender === 'other'}
                    // onChange={handleChange}
                    required
                  />
                  Other
                </label>
              </div>
              <input
                type="file"
                label="profileImg"
                name="profileImg"
                required
              />
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
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
