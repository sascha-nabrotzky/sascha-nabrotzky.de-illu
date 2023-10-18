import React, { useState } from "react";
import { Link } from "react-router-dom";
import InstaLogo from "../assets/icons/instagram-logo.svg?react"; //?react and svgr/client in vite-env.d.ts is needed to make the svg work
import MailIcon from "../assets/icons/mail.svg?react";

const Footer = () => {
  const [currentMail, setMail] = useState("anti@spam-mail.de");

  function addMail() {
    setMail("mailto:illustration@sascha-nabrotzky.de");
  }

  return (
    <footer className="flex flex-col items-center pt-16 pb-10">
      <div className="flex">
        <a
          className="mx-4 transition-color duration-200 text-stone-700 hover:text-pharlap-600"
          href="https://www.instagram.com/sascha.illustrates"
          target="_blank"
          title="Zu meinem Instagram-Account"
        >
          <InstaLogo className="h-8" />
        </a>
        <a
          className="mx-4 transition-color duration-300 text-stone-700 hover:text-pharlap-600"
          href={`${currentMail}`}
          target="_blank"
          rel="noreferrer"
          title="Schreib mir eine E-Mail"
          onClick={addMail}
        >
          <MailIcon className="h-8" />
        </a>
      </div>
      <div className="flex mt-6 pt-5 border-t border-stone-700">
        <Link
          to="/impressum"
          className="text-stone-700 hover:text-pharlap-600 transition-color duration-200 uppercase tracking-widest text-xs mx-4"
        >
          Impressum
        </Link>
        <Link
          to="/datenschutz"
          className="text-stone-700 hover:text-pharlap-600 transition-color duration-200 uppercase tracking-widest text-xs mx-4"
        >
          Datenschutz
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
