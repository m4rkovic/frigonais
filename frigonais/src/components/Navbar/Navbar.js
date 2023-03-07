import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Logo from "../../assets/images/logo/fn-logo-red-green.png";
import { t } from "i18next";
import LanguageChip from "../LanguageChip/LanguageChip";
import { useTranslation } from "react-i18next";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const { t } = useTranslation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <IconContext.Provider value={{ color: "#cd4a4c" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="home"
              className={"nav-links"}
              spy={true}
              smooth={true}
              offset={-210}
              duration={500}
              onClick={closeMobileMenu}
            >
              <img src={Logo} className="nav-logo-img" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="home"
                  className={"nav-links"}
                  spy={true}
                  smooth={true}
                  offset={-210}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className={"nav-links"}
                  spy={true}
                  smooth={true}
                  offset={-210}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  {t("about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className={"nav-links"}
                  spy={true}
                  smooth={true}
                  offset={-340}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  {t("contact")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="products"
                  className={"nav-links"}
                  spy={true}
                  smooth={true}
                  offset={-340}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  {t("products")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="products"
                  className={"nav-links"}
                  spy={true}
                  smooth={true}
                  offset={-340}
                  duration={500}
                  // onClick={closeMobileMenu}
                >
                  <LanguageChip />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
