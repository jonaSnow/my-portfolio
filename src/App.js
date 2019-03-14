import React, { Component } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div
        className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs"
      >
        <Header />
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Jonathan Guzman</span>
        </div>
        <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
            <div className="page-content"><Card /></div>
          </section>
          <section className="mdl-layout__tab-panel" id="fixed-tab-2">
            <div className="page-content">Jona</div>
          </section>
          <section className="mdl-layout__tab-panel" id="fixed-tab-3">
            <div className="page-content">Jona</div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
