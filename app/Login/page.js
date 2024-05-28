"use client";
import LoginModal from "@/utils/components/loginModal/loginModal";
import { useState } from "react";

export default function LoginPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* <button onClick={() => setOpen(true)} style={{position: "relative", top: "10vh"}}>Click me</button> */}

      {/* {open && <LoginModal setOpen={setOpen} />}  */}
      <LoginModal setOpen={setOpen}/>
    </div>
  );
}