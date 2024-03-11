import React from "react";
import { createHashRouter } from "react-router-dom";
import Editorial from "../Editorial";
import Children from "../Children";
import About from "../About";
import Impressum from "../Impressum";
import Datenschutz from "../Datenschutz";

const router = createHashRouter([
    {
        path: "/",
        element: <Editorial />,
    },
    {
        path: "/children",
        element: <Children />,
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
