"use client";

import { Button } from "@mui/material"; // Importing Button component from Material UI for styling and functionality

/**
 * Error component to display an error message and provide a button to retry.
 *
 * @param {Object} props - Component props
 * @param {Error} props.error - The error object containing error details
 * @param {Function} props.reset - Function to attempt to recover by re-rendering the segment
 * @returns {JSX.Element} The rendered Error component
 */
export default function Error({ error, reset }) {
  return (
    <div className="column center middleware-height">
      <h2>{error.message}</h2> {/* Display the error message */}
      <Button
        variant="contained" // Material UI button style
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
