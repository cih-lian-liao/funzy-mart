import React, { useState, useEffect } from "react";
import "./Top.css";

export default function Top() {
  const [isVisible, setIsVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide top bar on very small screens when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (windowWidth <= 479) {
        setIsVisible(window.scrollY < 50);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowWidth]);

  // Format phone number for different screen sizes
  const formatPhoneNumber = () => {
    return "+1 213 974-9090";
  };

  // Format email for different screen sizes
  const formatEmail = () => {
    return "funzymart@gmail.com";
  };

  // Social media links with proper accessibility
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/",
      icon: "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg",
      ariaLabel: "Follow us on Twitter"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/",
      icon: "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg",
      ariaLabel: "Follow us on Facebook"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/",
      icon: "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg",
      ariaLabel: "Follow us on Instagram"
    },
    {
      name: "Pinterest",
      url: "https://pinterest.com/",
      icon: "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg",
      ariaLabel: "Follow us on Pinterest"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/",
      icon: "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg",
      ariaLabel: "Subscribe to our YouTube channel"
    }
  ];

  // Show only essential social links on very small screens
  const visibleSocialLinks = windowWidth <= 479 
    ? socialLinks.slice(0, 3) // Show only first 3 on very small screens
    : socialLinks;

  if (!isVisible) {
    return null;
  }

  return (
    <header className="top" aria-label="Contact information and social media links">
      <div className="top__contact">
        <div className="top__contact--phone">
          <span className="top__contact-icon" aria-hidden="true">📞</span>
          <a 
            href="tel:+12139749090" 
            className="top__contact-text"
            aria-label="Call us at +1 213 974-9090"
          >
            {formatPhoneNumber()}
          </a>
        </div>
        <div className="top__contact--email">
          <span className="top__contact-icon" aria-hidden="true">✉️</span>
          <a 
            href="mailto:funzymart@gmail.com" 
            className="top__contact-text"
            aria-label="Email us at funzymart@gmail.com"
          >
            {formatEmail()}
          </a>
        </div>
      </div>

      <ul className="top__social" aria-label="Social media links">
        {visibleSocialLinks.map((social) => (
          <li 
            key={social.name}
            className="top__social-item"
          >
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="top__social-link"
            >
              <img
                src={social.icon}
                alt={`${social.name} icon`}
                loading="lazy"
              />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
