import "./About.css";
import Breadcrumb from "../Breadcrumb/BreadCrumb.jsx";
import Section4 from "../Section4/Section4.jsx";
import Section5 from "../Section5/Section5.jsx";
import Subscribe from "../Subscribe/Subscribe.jsx";
import FollowInstagram from "../FollowInstagram/FollowInstagram.jsx";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about">
      <div className="about__breadcrumb-wrapper">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
          ]}
        />
      </div>

      <div className="about__content">
        <div className="about__text-content">
          <p className="about__tagline">🎉 Welcome to FunzyMart!</p>
          <h1 className="about__title">Bringing Joy & Learning to Every Family</h1>
          <p className="about__description">
            At FunzyMart, we believe that every child deserves the best toys to spark their imagination, 
            encourage creativity, and create lasting memories. Our carefully curated collection features 
            premium stuffed animals, educational wooden toys, and safe, durable products that grow with 
            your little ones.
          </p>
          <p className="about__mission">
            <strong>Our Mission:</strong> To provide families with high-quality, educational, and fun toys 
            that promote healthy development while bringing smiles to children's faces every day.
          </p>
          <div className="about__features">
            <div className="about__feature">
              <span className="about__feature-icon">🧸</span>
              <span className="about__feature-text">Premium Quality Toys</span>
            </div>
            <div className="about__feature">
              <span className="about__feature-icon">🎓</span>
              <span className="about__feature-text">Educational Value</span>
            </div>
            <div className="about__feature">
              <span className="about__feature-icon">🛡️</span>
              <span className="about__feature-text">Child-Safe Materials</span>
            </div>
            <div className="about__feature">
              <span className="about__feature-icon">💝</span>
              <span className="about__feature-text">Perfect for Gifting</span>
            </div>
          </div>
          <Link to="/catalog" className="about__cta-button">🛒 Explore Our Collection</Link>
        </div>

        <div className="about__image-wrapper">
          <img
            className="about__image"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-2000.jpeg"
            alt="Happy children playing with FunzyMart toys"
          />
          <div className="about__image-overlay">
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">500+</span>
                <span className="about__stat-label">Happy Families</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">1000+</span>
                <span className="about__stat-label">Toys Delivered</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">50+</span>
                <span className="about__stat-label">Cities Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section5 />
      <Section4 />

    </section>
  );
}
