import { CircularProgress } from "@mui/material"; // Importing CircularProgress component from Material-UI

/**
 * Loading component displays a centered loading spinner while content is being fetched or processed.
 *
 * @returns {JSX.Element} A centered CircularProgress component.
 */
export default function Loading() {
  return (
    <div className="center" style={{ height: "100vh", width: "100%" }}>
      {/* The CircularProgress component displays a spinning loader */}
      <CircularProgress />
    </div>
  );
}
