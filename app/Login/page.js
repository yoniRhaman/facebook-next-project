"use client";

import LoginModal from "@/utils/components/loginModal/loginModal"; // Import the LoginModal component for user authentication
import { useState } from "react"; // Import useState hook for managing component state

/**
 * LoginPage component renders the login page with a modal for user authentication.
 * It includes a LoginModal component which is controlled by the `open` state.
 *
 * @returns {JSX.Element} The rendered LoginPage component with a login modal
 */
export default function LoginPage() {
  // State to control the visibility of the LoginModal
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: "100vh", width: "100%" }}> {/* Full viewport height and width */}
      <LoginModal setOpen={setOpen} /> {/* Render the LoginModal component and pass setOpen for controlling visibility */}
    </div>
  );
}
