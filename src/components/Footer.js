import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn, faGithub, faInstagram);

const Footer = () => (
  <footer className="mdl-mini-footer">
    <div className="mdl-mini-footer__left-section">
      <ul className="mdl-mini-footer__link-list">
        <li>
          <a href="https://www.instagram.com/ghostfacejona/?hl=en">
            <FontAwesomeIcon
              className="social-media-icon"
              icon={["fab", "instagram"]}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/jonaSnow">
            <FontAwesomeIcon
              className="social-media-icon"
              icon={["fab", "github"]}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jonathan-guzman-3b104a46/">
            <FontAwesomeIcon
              className="social-media-icon"
              icon={["fab", "linkedin-in"]}
            />
          </a>
        </li>
      </ul>
      <div className="mdl-logo">Jonathan Rafael Guzman</div>
    </div>
  </footer>
);

export default Footer;
