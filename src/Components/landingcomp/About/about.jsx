import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about" id="abouts">
      <h1>About Rentiva</h1>

      <p className="about-tagline">
        Premium Car Rentals • Reliable • Affordable
      </p>


      <div className="about-flex">

        <div className="about-content">
          <p>
            <strong>Rentiva</strong> is a modern car rental platform designed to
            make vehicle booking simple, fast, and reliable. Our goal is to
            provide customers with well-maintained cars at affordable prices.
          </p>

          <p>
            We offer a wide range of vehicles including hatchbacks, sedans,
            SUVs, and luxury cars. Each vehicle is carefully inspected to ensure
            comfort and safety.
          </p>

          <p>
            With easy booking, transparent pricing, and dedicated support,
            Rentiva makes every journey hassle-free.
          </p>
        </div>

        <div className="about-video">
          <video
            src="/images/Rentiva.mp4"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
          />

        </div>

      </div>


      <section className="brands-section">
        <h2>Our Luxury Brand</h2>

        <div className="brand-logos">
          <div className="brand"><span>Audi</span></div>
          <div className="brand"><span>Mercedes</span></div>
          <div className="brand"><span>BMW</span></div>
          <div className="brand"><span>Range Rover</span></div>
          <div className="brand"><span>Toyota</span></div>
        </div>

        <div className="store-link">
          <a href="/cars">See The Store</a>
        </div>
      </section>
    </section>
  );
}

export default About;
