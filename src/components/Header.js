import React from "react";
import logoname from "../images/name-logo.png";

const Header = () => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <div className="logo-container">
        <img className="logo-container__img" src={logoname} alt="JONA" />
      </div>
    </div>
    <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a href="#fixed-tab-1" className="mdl-layout__tab is-active">
        Projects
      </a>
      <a href="#fixed-tab-2" className="mdl-layout__tab">
        About
      </a>
    </div>
  </header>
);

export default Header;
