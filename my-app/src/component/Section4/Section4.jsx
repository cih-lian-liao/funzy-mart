import React from "react";
import "./Section4.css";

export default function Section4() {
  return (
    <section className="section-about-video">
      <div className="section-about-video__content">
        <p className="section-about-video__subtitle">Our Story</p>
        <h1 className="section-about-video__title">See How We Bring Joy to Families</h1>
        <p className="section-about-video__description">
          From our humble beginnings to becoming a trusted name in children's toys, <br />
          discover the passion and dedication behind every product we carefully select <br />
          to bring smiles and laughter to families around the world.
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
