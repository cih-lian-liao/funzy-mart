import React from "react";
import { Link } from "react-router-dom";
import "./Section5.css";

export default function Section5() {
  return (
    <section className="section-highlight">
      <div className="section-highlight__titles">
        <p className="section-highlight__subtitle">Why Choose FunzyMart?</p>
        <h2 className="section-highlight__headline">
          Quality Toys & <br />
          Happy Memories for Every Family
        </h2>
      </div>
      <div className="section-highlight__content">
        <div className="section-highlight__text">
          <h3 className="section-highlight__text-title">Premium Quality Guaranteed!</h3>
          <div className="section-highlight__divider"></div>
          <p className="section-highlight__description">
            At FunzyMart, we believe every child deserves the best toys. Our carefully curated collection features <br />
            high-quality stuffed animals, educational wooden toys, and safe, durable products that <br />
            spark imagination and create lasting memories for your family.
          </p>
          <Link to="/catalog" className="section-highlight__cta">SHOP NOW!</Link>
        </div>
        <div className="section-highlight__image-wrapper">
          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
            alt="Quality toys and happy families"
            className="section-highlight__image"
          />
        </div>
      </div>
    </section>
  );
}
