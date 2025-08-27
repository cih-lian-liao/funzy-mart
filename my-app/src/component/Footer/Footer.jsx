import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <Link to="/" className="footer__logo">
          FunzyMart
        </Link>
        <ul className="footer__menu">
          <li>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/catalog"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              to="/delivery"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Delivery
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contacts
            </Link>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg"
              alt="Twitter"
            />
          </a>
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg"
              alt="Facebook"
            />
          </a>
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg"
              alt="Instagram"
            />
          </a>
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg"
              alt="Pinterest"
            />
          </a>
          <a href="https://elasticthemes.com" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg"
              alt="YouTube"
            />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Created with love by{" "}
          <a
            href="https://www.elasticthemes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elastic Themes
          </a>
        </p>
        <p>
          Powered by Webflow •{" "}
          <a
            href="https://webflow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Style Guide
          </a>{" "}
          •{" "}
          <a
            href="https://webflow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Licensing
          </a>
        </p>
      </div>
    </footer>
  );
}
