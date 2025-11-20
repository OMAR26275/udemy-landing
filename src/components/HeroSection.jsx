import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Learn essential career and life skills</h2>
        <p>
          Udemy helps you build in-demand skills fast<br />
          and advance your career in a changing job<br />
          market.
        </p>
      </div>

      <div className="hero-images">
        <img src="/images/hero1.jpg" alt="Skill 1" />
        <img src="/images/hero2.jpg" alt="Skill 2" />
        <img src="/images/hero3.jpg" alt="Skill 3" />
      </div>

      {/* Big hero banner image */}
      <div className="hero-banner">
        <img src="/images/hero-banner.jpg" alt="Hero Big Banner" />
      </div>
    </section>
  );
};

export default HeroSection;
