import React from "react";
import { Link } from "react-router-dom";
import './Hero.css';

export default function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero__background">
          <div className="hero__card">
            <div className="hero__content">
              <p className="hero__subtitle">Say Hello to FunzyMart!</p>
              <h1 className="hero__title">
                Free Ecommerce <br />
                Template for Webflow
              </h1>
              <Link to="/catalog" className="hero__cta-button">
                Open Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
