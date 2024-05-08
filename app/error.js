"use client";

import { Button } from "@mui/material";

export default function Error({ error, reset }) {
  return (
    <div className="column center middleware-height">
      <h2>{error.message}</h2>
      <Button
        variant="contained"
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
