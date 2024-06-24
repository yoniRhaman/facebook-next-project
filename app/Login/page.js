"use client";
import LoginModal from "@/utils/components/loginModal/loginModal";
import { Height } from "@mui/icons-material";
import { useState } from "react";

export default function LoginPage() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <LoginModal setOpen={setOpen} />
    </div>
  );
}
