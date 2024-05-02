"use client";
import { useState } from "react";
import Link from "next/link";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="login-links">

        <Link href="/forgot-password">
          Forgot password?
        </Link>
        <Link href="/register">
          Register
        </Link>
        <Link href="/forgot-password">Forgot password?</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
