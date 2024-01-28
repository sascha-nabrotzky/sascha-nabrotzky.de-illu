import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "../src/Router/Router";
import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import "./Main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </HelmetProvider>
);
