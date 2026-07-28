import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { logo, logoText, menu, close } from "../assets";

// CV masqué temporairement (28/07/2026) — repasser à false pour le réafficher
const HIDE_RESUME = true;

// Anchor sections (smooth scroll on homepage)
const anchorLinks = [
  { id: "about" },
  { id: "work" },
  { id: "testimonials" },
  { id: "contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLang = () => {
    const next = i18n.language.startsWith("fr") ? "en" : "fr";
    i18n.changeLanguage(next);
  };

  const scrollToSection = (id) => {
    if (!isHomePage) {
      // Navigate home first, then scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0014]/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <button
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            if (isHomePage) window.scrollTo({ top: 0, behavior: "smooth" });
            else navigate("/");
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <img src={logoText} alt="Meggie on the Stack" className="h-8 object-contain" />
        </button>

        {/* Desktop nav */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {anchorLinks.map((nav) => (
            <li key={nav.id}>
              <button
                onClick={() => scrollToSection(nav.id)}
                className={`text-[17px] font-medium transition-colors duration-200 ${
                  active === nav.id ? "text-white" : "text-secondary hover:text-white"
                }`}
              >
                {t(`nav.${nav.id}`)}
              </button>
            </li>
          ))}

          {/* Resume — separate route. Masqué temporairement : repasser HIDE_RESUME à false pour le réafficher */}
          {!HIDE_RESUME && (
            <li>
              <Link
                to="/resume"
                className={`text-[17px] font-medium transition-colors duration-200 ${
                  location.pathname === "/resume"
                    ? "text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                {t("nav.resume")}
              </Link>
            </li>
          )}

          {/* Language toggle */}
          <li>
            <button
              onClick={switchLang}
              className="text-[15px] font-semibold px-3 py-1 rounded-lg border border-[#6909D7] text-[#6909D7] hover:bg-[#6909D7] hover:text-white transition-all duration-200"
            >
              {i18n.language.startsWith("fr") ? "EN" : "FR"}
            </button>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          <button
            onClick={switchLang}
            className="text-[13px] font-semibold px-2 py-1 rounded-md border border-[#6909D7] text-[#6909D7]"
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
              {anchorLinks.map((nav) => (
                <li key={nav.id}>
                  <button
                    onClick={() => scrollToSection(nav.id)}
                    className={`font-medium cursor-pointer text-[16px] ${
                      active === nav.id ? "text-white" : "text-secondary"
                    }`}
                  >
                    {t(`nav.${nav.id}`)}
                  </button>
                </li>
              ))}
              {!HIDE_RESUME && (
                <li>
                  <Link
                    to="/resume"
                    className="font-medium cursor-pointer text-[16px] text-secondary"
                    onClick={() => setToggle(false)}
                  >
                    {t("nav.resume")}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
