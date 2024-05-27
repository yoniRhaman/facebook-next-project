"use client";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import "./loginModal.css";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { login } from "@/utils/api/loginApi";
export default function LoginModal({ setOpen }) {
  async function handleSumbit(e) {
    try {
      e.preventDefault();
      // setLoading(true);
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const token = await login(data);
      setCookie("token", token);
      console.log(token);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
  return (
    <div className="column center navbar-modal ">
      <button className="close-button" onClick={() => setOpen(false)}>
        <Close />
      </button>
      <form className="form-input column gap-20" onSubmit={handleSumbit}>
        <h1>Login form</h1>
        <TextField name="email" label="email" type="email" />
        <TextField name="password" label="password" type="password" />
        <Button variant="contained" type="submit">
          Log in
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
