import React from "react";
import photoImage from "../assets/images/photo.png"; // Import the image

function Home() {
  const heroStyles = {
    backgroundColor: "#f8f9fa", // Set your desired background color
    padding: "60px 0", // Adjust padding as needed
    textAlign: "center",
    color: "#333", // Set your desired text color
  };

  const headingStyles = {
    fontSize: "2.5rem", // Adjust font size as needed
    marginBottom: "20px", // Adjust margin as needed
  };

  const descriptionStyles = {
    fontSize: "1.2rem", // Adjust font size as needed
    maxWidth: "800px", // Limit the width to control text line length
    margin: "0 auto", // Center the text
  };

  return (
    <section id="hero" style={heroStyles}>
      <h1 style={headingStyles}>My Portfolio</h1>
      <p style={descriptionStyles}>
        Turning Ideas into Interactive Reality: Transforming your vision into a responsive and user-centric web presence.
      </p>
      <img src={photoImage} alt="Saad Siddiqui" style={{ borderRadius: "50%", marginTop: "20px" }} /> {/* Apply styles to the image */}
    </section>
  );
}

export default Home;
