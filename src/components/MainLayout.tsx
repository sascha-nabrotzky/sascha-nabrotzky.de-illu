import React, { PropsWithChildren } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout({ children }: PropsWithChildren<object>) {
    return (
        <>
            <Navigation />
            <div className="relative grid min-h-svh max-w-screen-3xl mx-auto grid-rows-[min-content_1fr_min-content]">
                <Header />
                <main className="grid gap-x-16 gap-y-20 md:grid-cols-default text-stone-700">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;
