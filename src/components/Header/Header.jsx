import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import close from "../../assets/close.svg";
import hamburger from "../../assets/hamburger.svg";
import { useState } from "react";

function Header({
  onAddClothesClick,
  weatherData,
  isMobileMenuOpened,
  toggleMobileMenu,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const location = "New York";

  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="WTWR" />
        <div
          className={`header__left ${isMobileMenuOpened ? "header__nav_opened" : ""}`}
        >
          <p className="header__date-and-location">
            {currentDate}, {weatherData.city}
          </p>
        </div>
      </div>
      <div
        className={`header__user-container ${isMobileMenuOpened ? "header__user-container_opened" : ""}`}
      >
        <button
          onClick={toggleMobileMenu}
          aria-label="Close"
          className="header__close-btn"
        >
          <img src={close} alt="Close" className="header__close-icon" />
        </button>
        <button onClick={onAddClothesClick} className="header__add-clothes-btn">
          + Add clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>

      <button
        onClick={toggleMobileMenu}
        aria-label="Menu"
        className="header__menu-btn"
      >
        <img src={hamburger} alt="Menu" className="header__menu-icon" />
      </button>
    </header>
  );
}

export default Header;
