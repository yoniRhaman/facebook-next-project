"use client";

import { Button, CircularProgress } from "@mui/material";
import { useFormStatus } from "react-dom";

/**
 * SubmitBtn component to display a submit button with loading spinner.
 * @param {Object} props - Component props.
 * @param {string} [props.text="Add product"] - The text to display on the button.
 * @returns {JSX.Element} The submit button or loading spinner based on form status.
 */
export default function SubmitBtn({ text = "Add product" }) {
  // Use the useFormStatus hook to get the form submission status
  const { pending } = useFormStatus();

  // Render a CircularProgress spinner if form submission is pending
  return pending ? (
    <CircularProgress />
  ) : (
    <Button type="submit" variant="contained">
      {text}
    </Button>
  );
}
