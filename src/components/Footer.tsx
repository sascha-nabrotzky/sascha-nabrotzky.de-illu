import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as InstaLogo } from "../assets/icons/instagram-logo.svg";
import { ReactComponent as GlobeIcon } from "../assets/icons/www-globe_white.svg";
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg";

const Footer = () => {
  const [currentMail, setMail] = useState("anti@spam-mail.de");

  function addMail() {
    setMail("mailto:illustration@sascha-nabrotzky.de");
  }

  return (
    <footer className="flex flex-col items-center pt-16 pb-10">
      <div className="flex">
        <a
          className="mx-4 transition-color duration-200 text-stone-200 hover:text-terracotta"
          href="https://www.instagram.com/sascha.illustrates"
          target="_blank"
          title="Zu meinem Instagram-Account"
        >
          <InstaLogo className="h-8" />
        </a>
        <a
          className="mx-4 transition-color duration-300 text-stone-200 hover:text-terracotta"
          href={`${currentMail}`}
          target="_blank"
          rel="noreferrer"
          title="Schreib mir eine E-Mail"
          onClick={addMail}
        >
          <MailIcon className="h-8" />
        </a>
        <a
          className="mx-4 transition-color duration-200 text-stone-200 hover:text-terracotta"
          href="https://sascha-nabrotzky.github.io"
          target="_blank"
          title="Zu meiner GitHub-Website"
        >
          <GlobeIcon className="h-8" />
        </a>
      </div>
      <div className="flex mt-6 pt-5 border-t border-stone-200">
        <Link
          to="/impressum"
          className="text-stone-200 hover:text-terracotta transition-color duration-200 uppercase tracking-widest text-xs mx-4"
        >
          Impressum
        </Link>
        <Link
          to="/datenschutz"
          className="text-stone-200 hover:text-terracotta transition-color duration-200 uppercase tracking-widest text-xs mx-4"
        >
          Datenschutz
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
