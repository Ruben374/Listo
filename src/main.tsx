import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import Home from "./pages/Home";
import VitalTask from "./pages/VitalTask";
import TaskCategories from "./pages/TaskCategories";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vital_tasks" element={<VitalTask />} />
        <Route path="/categories" element={<TaskCategories />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
