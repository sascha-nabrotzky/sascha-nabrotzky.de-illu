import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Illustration from "./Illustration";
import Childrensbooks from "./Childrensbooks";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import Footer from "./Footer";
import Header from "./Header";

import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App relative grid h-screen grid-rows-[min-content_1fr_min-content]">
                <Navigation />
                <Header />
                <main className="grid gap-16 p-4 md:p-0 md:grid-cols-default text-stone-200">
                    <Routes>
                        <Route path="/" element={<Illustration />} />
                        <Route path="/kinderbuecher" element={<Childrensbooks />} />
                        <Route path="/ueber-mich" element={<About />} />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
