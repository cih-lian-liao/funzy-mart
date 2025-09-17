import React from "react";
import "./Top.css";

export default function Top() {
  return (
    <section className="top">
      <div className="top__contact">
        <div className="top__contact--phone">
          <p className="top__contact-text">Call Us: +1 213 974-9090</p>
        </div>
        <div className="top__contact--email">
          <p className="top__contact-text">Email: FunzyMart@Gmail.com</p>
        </div>
      </div>

      <div className="top__social">
        <div className="top__social-item top__social-item--twitter">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg"
              alt="Twitter"
            />
          </a>
        </div>
        <div className="top__social-item top__social-item--facebook">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg"
              alt="Facebook"
            />
          </a>
        </div>
        <div className="top__social-item top__social-item--instagram">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg"
              alt="Instagram"
            />
          </a>
        </div>
        <div className="top__social-item top__social-item--pinterest">
          <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg"
              alt="Pinterest"
            />
          </a>
        </div>
        <div className="top__social-item top__social-item--youtube">
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg"
              alt="YouTube"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
