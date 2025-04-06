import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { DashboardRoutes } from "./routes/dashboard.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...DashboardRoutes],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
