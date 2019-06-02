import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Aboutme from "./components/Aboutme";
import "./styles/styles.scss";

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
        <Header />
        <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
            <div className="page-content">
              <Card
                title="Expensify App"
                description="React App used to add, remove or update expenses"
                link="http://expensify-jg.s3-website-us-east-1.amazonaws.com"
              />
              <Card
                title="Indecision App"
                description="React App used to add, remove or selecting options"
                link="http://indecision-app-jg.s3-website.us-east-2.amazonaws.com"
              />
              <Card
                title="The Collective"
                description="Sample Bootstrap 3 site"
                link="https://github.com/jonaSnow/The-Collective"
              />
              <Card
                title="Team Generator"
                description="Java programe that uses xlsx or a csv to randomly generate teams"
                link="https://github.com/jonaSnow/TeamGenerator"
              />
            </div>
          </section>
          <section className="mdl-layout__tab-panel" id="fixed-tab-2">
            <Aboutme />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
