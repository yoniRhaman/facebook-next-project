"use client";
import { Close } from "@mui/icons-material";
import { Button, CircularProgress, TextField } from "@mui/material";
import "./loginModal.css";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { login } from "@/utils/api/loginApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginModal() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleSumbit(e) {
    try {
      setLoading(true);
      e.preventDefault();
      // setLoading(true);
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const { token, user_id, profileImg } = await login(data);
      setCookie("token", token);
      setCookie("uid", user_id);
      setCookie("profileImg", profileImg);
      router.push("/");
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
  return (
    <div className="column center navbar-modal ">
      {/* <button className="close-button" onClick={() => setOpen(false)}>
        <Close />
      </button> */}
      <form className="form-input column gap-20" onSubmit={handleSumbit}>
        <h1>Login form</h1>
        <TextField name="email" label="email" type="email" />
        <TextField name="password" label="password" type="password" />
        <Button variant="contained" type="submit">
        {loading ? (
            <CircularProgress sx={{ color: "white" }} />
          ) : (
            "Log in"
          )}

        </Button>
        <Button variant="text">forgot password</Button>
      </form>
      <Link href={"/registration"}>
        <Button
          sx={{
            background: "green",
          }}
          variant="contained"
        >

          create new account
        </Button>
      </Link>
    </div>
  );
}
