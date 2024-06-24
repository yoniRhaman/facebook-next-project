"use client";
import { Close } from "@mui/icons-material";
import { Button, CircularProgress, TextField } from "@mui/material";
import "./loginModal.css";
import Link from "next/link";
import { getCookie, setCookie } from "cookies-next";
import { login } from "@/utils/api/loginApi";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginModal() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSumbit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const { token, user_id, profileImg } = await login(data);

      setCookie("token", token);
      setCookie("uid", user_id);
      setCookie("profileImg", profileImg);

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="column center navbar-modal ">
      <form className="form-input column gap-20" onSubmit={handleSumbit}>
        <h1>Login form</h1>
        <TextField
          name="email"
          label="email"
          type="email"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fffdfd",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fffdfd",
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#fffdfd",
            },
          }}
        />
        <TextField
          name="password"
          label="password"
          type="password"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fffdfd",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fffdfd",
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#fffdfd",
            },
          }}
        />
                <button className="text" name="text">
          forgot password
        </button>
        <Button variant="contained" type="submit">
          {loading ? <CircularProgress sx={{ color: "white" }} /> : "Log in"}
        </Button>
        <Link className="new" href={"/registration"}>
        <button
          className="new-button"
        >
          create new account
        </button>
      </Link>
      </form>

    </div>
  );
}
