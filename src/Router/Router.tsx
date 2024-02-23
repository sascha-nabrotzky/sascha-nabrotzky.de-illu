import React from "react";
import { createHashRouter } from "react-router-dom";
import Illustration from "../Illustration";
import Childrensbooks from "../Childrensbooks";
import About from "../About";
import Impressum from "../Impressum";
import Datenschutz from "../Datenschutz";

const router = createHashRouter([
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

export default router;
