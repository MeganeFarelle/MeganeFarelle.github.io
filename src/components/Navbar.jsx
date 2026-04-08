import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const navLinks = [
  { id: "about",        path: "/about" },
  { id: "work",         path: "/work" },
  { id: "testimonials", path: "/testimonials" },
  { id: "resume",       path: "/resume" },
  { id: "contact",      path: "/contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLang = () => {
    const next = i18n.language.startsWith("fr") ? "en" : "fr";
    i18n.changeLanguage(next);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Megane&nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop nav */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                to={nav.path}
                className={`text-[17px] font-medium transition-colors duration-200 ${
                  location.pathname === nav.path
                    ? "text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                {t(`nav.${nav.id}`)}
              </Link>
            </li>
          ))}

          {/* Language toggle */}
          <li>
            <button
              onClick={switchLang}
              className="text-[15px] font-semibold px-3 py-1 rounded-lg border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-all duration-200"
            >
              {i18n.language.startsWith("fr") ? "EN" : "FR"}
            </button>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          {/* Mobile lang toggle */}
          <button
            onClick={switchLang}
            className="text-[13px] font-semibold px-2 py-1 rounded-md border border-[#915EFF] text-[#915EFF]"
          >
            {i18n.language.startsWith("fr") ? "EN" : "FR"}
          </button>

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={nav.path}
                    className={`font-medium cursor-pointer text-[16px] ${
                      location.pathname === nav.path
                        ? "text-white"
                        : "text-secondary"
                    }`}
                    onClick={() => setToggle(false)}
                  >
                    {t(`nav.${nav.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
