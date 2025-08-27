import React from "react";
import "./Section4.css";

export default function Section4() {
  return (
    <section className="section-about-video">
      <div className="section-about-video__content">
        <p className="section-about-video__subtitle">About The Shop</p>
        <h1 className="section-about-video__title">Watch Our Story</h1>
        <p className="section-about-video__description">
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement,<br /> demographic, even the
          consumer’s mood.
        </p>
        <div className="section-about-video__play-icon">
          <img
            src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg"
            alt="Play video"
          />
        </div>
      </div>
    </section>
  );
}
