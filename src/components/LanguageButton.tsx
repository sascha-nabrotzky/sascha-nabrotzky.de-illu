import React, { MouseEventHandler, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Button = ({
  lang,
  label,
  onClick,
}: {
  lang: string;
  label: string;
  onClick: MouseEventHandler;
}) => {
  const { i18n } = useTranslation();
  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {
    i18n.language === lang ? setActiveButton(true) : setActiveButton(false);
  });

  return (
    <button
      type="button"
      key={lang}
      value={lang}
      onClick={onClick}
      className={`text-sm first:after:content-['|'] first:after:pl-1.5 ${
        activeButton ? "text-gray-700" : "text-gray-400"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
