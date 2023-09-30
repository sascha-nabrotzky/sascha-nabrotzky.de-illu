import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Illustration from "./Illustration";
import Childrensbooks from "./Childrensbooks";
import About from "./About";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import "./Main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Illustration />,
  },
  {
    path: "/kinderbuecher",
    element: <Childrensbooks />,
  },
  {
    path: "/ueber-mich",
    element: <About />,
  },
  {
    path: "/impressum",
    element: <Impressum />,
  },
  {
    path: "/datenschutz",
    element: <Datenschutz />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
