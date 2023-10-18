import React, { FunctionComponent, PropsWithChildren } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="App relative grid h-screen grid-rows-[min-content_1fr_min-content]">
      <Navigation />
      <Header />
      <main className="grid gap-x-16 gap-y-20 md:grid-cols-default text-stone-700">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
