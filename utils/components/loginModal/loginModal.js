"use client";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import "./loginModal.css";
import Link from "next/link";
import getUserByPassword from "@/utils/api/login";
export default function LoginModal({ setOpen }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const json = Object.fromEntries(formData.entries());
    // console.log(json);
    getUserByPassword(json);
    setOpen(false);

  }
  return (
    <div className="column center navbar-modal ">
      <button className="close-button" onClick={() => setOpen(false)}>
        <Close />
      </button>
      <form className="form-input column gap-20" onSubmit={handleSubmit}>
        <h1>Login form</h1>
        <TextField name="email" label="email" type="email" />
        <TextField name="password" label="password" type="password" />
        <Button
          variant="contained"
          type="submit"
        >
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
