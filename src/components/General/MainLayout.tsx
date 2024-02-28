import React, { PropsWithChildren } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }: PropsWithChildren<object>) => {
    return (
        <>
            <Navigation />
            <div className="relative grid max-w-screen-3xl mx-auto grid-rows-[min-content_1fr_min-content]">
                <Header />
                <main className="grid gap-x-16 gap-y-20 md:grid-cols-default text-stone-700">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
