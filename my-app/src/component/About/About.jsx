import "./About.css";
import Breadcrumb from "../BreadCrumb/BreadCrumb.jsx";
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
        <p className="about__tagline">Say Hello to FunzyMart!</p>
        <h1 className="about__title">Introducing FunzyMart</h1>
        <p className="about__description">
          A successful marketing plan relies heavily on the pulling-power of
          advertising copy. 
          Writing <br />result-oriented ad copy is difficult, as it must appeal to,
          entice, and convince consumers to <br />
          take action.
        </p>
        <Link className="about__more-link">More About Us</Link>

        <img
          className="about__image"
          src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-2000.jpeg"
          alt="About FunzyMart"
        />
      </div>

      <Section5 />
      <Section4 />

    </section>
  );
}
