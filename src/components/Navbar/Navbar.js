import classes from "./Navbar.module.css";
import React from "react";
import { useState,useEffect } from "react";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isNormalNavbar, setIsNormalNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNormalNavbar(window.innerWidth > 1285);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showList = () => {
    setShowNavbar(!showNavbar);
  };

  return (
      <div className={classes.main}>
        {isNormalNavbar ? (
          <div className={classes.normalNavbar}>
            <ul className={classes.navbar}>
              <li>
                <a href="/">Ana Sayfa</a>
              </li>
              <li>
                <a href="/about">Hakkımızda</a>
              </li>
              <li>
                <a href="/services">Hizmetlerimiz</a>
              </li>
              <li>
                <a href="/products">Ürünlerimiz</a>
              </li>
              <li>
                <a href="/preferencec">Referanslar</a>
              </li>
              <li>
                <a href="/communication">İletişim</a>
              </li>
              <li>
                <a href="/preferencec">Bilgisayar Tamir - Bakım</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className={classes.mobile}>
            <div className={classes.lines} onClick={showList}>
              <div className={!showNavbar ? classes.line : classes.close}></div>
              <div className={!showNavbar ? classes.line : classes.close}></div>
              <div className={!showNavbar ? classes.line : classes.close}></div>
            </div>
            {showNavbar && (
              <div className={classes.dropList}>
                <ul className={classes.dropdown}>
                  <li>
                    <a href="/">Ana Sayfa</a>
                  </li>
                  <li>
                    <a href="/about">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="/services">Hizmetlerimiz</a>
                  </li>
                  <li>
                    <a href="/products">Ürünlerimiz</a>
                  </li>
                  <li>
                    <a href="/preferencec">Referanslar</a>
                  </li>
                  <li>
                    <a href="/communication">İletişim</a>
                  </li>
                  <li>
                    <a href="/preferencec">Bilgisayar Tamir - Bakım</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
};

export default Navbar;