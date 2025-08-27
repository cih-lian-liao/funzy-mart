import React from "react";
import "./Section5.css";

export default function Section5() {
  return (
    <section className="section-highlight">
      <div className="section-highlight__titles">
        <p className="section-highlight__subtitle">Made for Webflow</p>
        <h2 className="section-highlight__headline">
          Simple & Colorful Ecommerce <br />
          Template for Your Business
        </h2>
      </div>
      <div className="section-highlight__content">
        <div className="section-highlight__text">
          <h3 className="section-highlight__text-title">Available for Free!</h3>
          <div className="section-highlight__divider"></div>
          <p className="section-highlight__description">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing <br /> result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to <br />take action.
            There is no magic formula to write perfect ad copy
          </p>
          <div className="section-highlight__cta">GET IT NOW!</div>
        </div>
        <div className="section-highlight__image-wrapper">
          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
            alt="Colorful ecommerce"
            className="section-highlight__image"
          />
        </div>
      </div>
    </section>
  );
}
