import React from "react";

const Header = () => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">Jona</span>
    </div>
    <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a href="#fixed-tab-1" className="mdl-layout__tab is-active">
        Projects
      </a>
      <a href="#fixed-tab-2" className="mdl-layout__tab">
        About
      </a>
      <a href="#fixed-tab-3" className="mdl-layout__tab">
        Contact
      </a>
    </div>
  </header>
);

export default Header;
