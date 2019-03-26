import React from "react";

const Card = props => (
  <div className="mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title mdl-card--expand">
      <h4>{props.title}</h4>
    </div>
    <div className="mdl-card_description">
      <h6>{props.description}</h6>
    </div>
    <div className="mdl-card__actions mdl-card--border">
      <i className="material-icons">link</i>
      <a
        href={props.link}
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

Card.defaultProps = {
  title: "Card Component",
  description: "Description for card component",
  link: "#"
};

export default Card;
