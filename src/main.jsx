import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import JobFilter from "./Components/JobFilter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <JobFilter>   
        <App />
      </JobFilter>
    </BrowserRouter>
  </StrictMode>
);
