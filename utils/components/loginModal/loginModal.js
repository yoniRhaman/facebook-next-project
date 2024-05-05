"use client";
import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import "./loginModal.css";
export default function LoginModal({ setOpen }) {
  function handleSumbit(e) {
    e.preventDefault();
  }
  return (
    <div className="column center navbar-modal ">
      <button className="close-button" onClick={() => setOpen(false)}>
        <Close />
      </button>
      <form className="form-input column gap-20" onSubmit={handleSumbit}>
        <h1>Login form</h1>
        <TextField
          name="email"
          label="email"
          type="email"
        />
        <TextField name="password" label="password" type="password" />
        <Button
          variant="contained"
          type="submit"
          onClick={() => setOpen(false)}
        >
          Log in
        </Button>
        <Button variant="text">forgot password</Button>
      </form>
      <Button
        sx={{
          background: "green",
        }}
        variant="contained"
      >
        create new account
      </Button>
    </div>
  );
}
