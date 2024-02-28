import React from "react";
import "./index.css";
import App from "./App";

// Import createRoot from "react-dom/client" instead of "react-dom"
import { createRoot } from "react-dom/client";

// Use createRoot to render the root component
createRoot(document.getElementById("root")).render(<App />);
