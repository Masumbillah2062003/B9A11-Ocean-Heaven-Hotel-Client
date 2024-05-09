import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Route/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
