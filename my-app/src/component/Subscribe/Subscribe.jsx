import React from "react";
import "./Subscribe.css";

export default function Subscribe() {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__info">
          <div className="newsletter__icon-wrapper">
            <img
              className="newsletter__icon"
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg"
              alt="Send icon"
            />
          </div>
          <h3 className="newsletter__text">
            <span className="bold">Subscribe to our newsletter</span>
            <br />& get <span className="highlight">10% discount!</span>
          </h3>
        </div>
        <div className="newsletter__form">
          <input
            type="email"
            className="newsletter__input"
            placeholder="Enter your email address"
          />
          <button className="newsletter__button">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
