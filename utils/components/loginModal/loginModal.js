"use client";

import { Close } from "@mui/icons-material";
import { Button, CircularProgress, TextField } from "@mui/material";
import "./loginModal.css";
import Link from "next/link";
import { getCookie, setCookie } from "cookies-next";
import { login } from "@/utils/api/loginApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginModal() {
  // State to handle loading spinner visibility
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Router instance for navigation

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Show loading spinner

    try {
      // Extract form data and send login request
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const { token, user_id, profileImg } = await login(data);
      
      // Set cookies with user data
      setCookie("token", token);
      setCookie("uid", user_id);
      setCookie("profileImg", profileImg);

      // Refresh the page to reflect changes
      router.refresh();
    } catch (error) {
      console.error(error); // Log any errors
    } finally {
      setLoading(false); // Hide loading spinner
    }
  }

  return (
    <div className="column center navbar-modal">
      <form className="form-input column gap-20" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <TextField
          name="email"
          label="Email"
          type="email"
          defaultValue="guest@gmail.com"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fffdfd", // Text color
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fffdfd", // Border color
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#fffdfd", // Label color
            },
          }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          defaultValue="1234"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fffdfd", // Text color
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fffdfd", // Border color
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#fffdfd", // Label color
            },
          }}
        />
        <button className="text" name="text">
          Forgot Password
        </button>
        <Button variant="contained" type="submit">
          {loading ? <CircularProgress sx={{ color: "white" }} /> : "Log In"}
        </Button>
        <Link className="new" href="/registration">
          <button className="new-button">Create New Account</button>
        </Link>
      </form>
    </div>
  );
}
