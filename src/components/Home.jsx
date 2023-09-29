import React from "react";
import photoImage from "../assets/images/photo.png"; // Import the image

function Home() {
  return (
    <section id="hero" className="text-center">
      <h1>My Portfolio</h1>
      <p className="portfolio-description">Welcome to my Website!</p>
      <img src={photoImage} alt="Saad Siddiqui" /> {/* Use the imported image */}
      {/* Additional information about yourself */}
    </section>
  );
}

export default Home;
