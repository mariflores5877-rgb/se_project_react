import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import { useState } from "react";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const location = "New York";
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  function toggleMobileMenu() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-and-location">
        {currentDate}, {location}
      </p>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
