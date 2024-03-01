import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App.jsx";
import "./index.css";
import NewsLetter from "./components/NewsLetter.jsx";
import BlogView from "./components/BlogView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<NewsLetter />),
  },
  {
    path:"/blog/:heading",
    element:(<BlogView/>),
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
