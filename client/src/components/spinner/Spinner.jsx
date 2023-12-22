import "./spinner.css";
import { CircularProgress } from "@mui/material";

export default function Spinner({ sxx }) {
  return (
    <div className={`spinner ${sxx}`}>
      <CircularProgress sx={{ color: "var(--secondary-color)" }} />
    </div>
  );
}
