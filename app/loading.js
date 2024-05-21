import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="center" style={{ height: "100vh", width: "100%" }}>
      <CircularProgress />
    </div>

  );
}
