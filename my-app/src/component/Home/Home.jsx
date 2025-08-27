import "./Home.css";
import Hero from "../Hero/Hero.jsx";
import Section1 from "../Section1/Section1.jsx";
import Section2 from "../Section2/Section2.jsx";
import Section3 from "../Section3/Section3.jsx";
import Section4 from "../Section4/Section4.jsx";
import Section5 from "../Section5/Section5.jsx";
import Subscribe from "../Subscribe/Subscribe.jsx";
import FollowInstagram from "../FollowInstagram/FollowInstagram.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Home() {
  return (
      <section className="home">
        <Hero></Hero>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>

      </section>
  );
}
