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
              <p className="hero__subtitle">Welcome to FunzyMart!</p>
              <h1 className="hero__title">
                Premium Toys & <br />
                Stuffed Animals
              </h1>
              <p className="hero__description">
                Discover our amazing collection of high-quality toys, 
                adorable stuffed animals, and educational wooden toys 
                that bring joy to children and families.
              </p>
              <Link to="/catalog" className="hero__cta-button">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
