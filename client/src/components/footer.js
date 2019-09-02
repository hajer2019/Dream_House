import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="">Tous les droits reservés</div>
      <div className="liens">
        <Link to="/"> Accueil</Link> |
        <Link to="/aboutus">A propos de nous</Link> |{" "}
        <Link to="contact">Contact</Link>| <Link to="/login"> Connexion </Link>{" "}
        | <Link to="/register">Inscription</Link>
      </div>
      <div className="socialmedia">
        <div id="sidebar" className="desktop-only" style={{ opacity: 1 }}>
          <div className="socialbox">
            <div class="follow-title">Follow Us</div>
            <div className="social">
              <a
                data-elementtrackid="link-facebook"
                href="https://www.facebook.com"
                id="fs-fb"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                data-elementtrackid="link-twitter"
                href="https://twitter.com"
                id="fs-tw"
              >
                <i class="fab fa-twitter-square"></i>
              </a>
              <a
                data-elementtrackid="link-linkedIn"
                href="https://www.linkedin.com"
                id="fs-ln"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default Footer;
