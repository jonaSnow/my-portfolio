import React from "react";

const Card = () => (
  <div className="demo-card-event mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title mdl-card--expand">
      <h4>Expensify App</h4><br />
      <h6>React App used to add, remove or update expenses</h6>
    </div>
    <div className="mdl-card__actions mdl-card--border">
      <i className="material-icons">link</i>
      <a
        href="https://github.com/jonaSnow/expensify-app"
        target="_blank"
        rel="noopener noreferrer"
        className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
      >
        Go to Project
      </a>
      {/* <div className="mdl-layout-spacer" /> */}
    </div>
  </div>
);

export default Card;
