import React from "react";

const About = () => {
  const sectionStyles = {
    backgroundColor: "#F8F9FA", // Light gray background color
    padding: "40px 0",
    color: "#333",
  };

  const headingStyles = {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#007BFF", // Blue color for the heading
  };

  const descriptionStyles = {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#555", // Dark gray text color
  };

  return (
    <section style={sectionStyles} className="text-center">
      <h2 style={headingStyles}>About Me</h2>
      <p style={descriptionStyles} className="about-description">
        As a junior web developer, I am passionate about creating engaging and user-friendly websites. With a strong foundation
        in coding and a drive for learning new technologies, I continuously expand my skills to stay up-to-date with industry
        trends. I have proficiency in HTML, CSS, and JavaScript—the building blocks of the web. I develop responsive and
        mobile-friendly websites that adapt to different devices. I also have experience with frameworks like Bootstrap and
        libraries like jQuery, which streamline development and enhance website functionality. Collaboration and problem-solving are
        key aspects of web development. Working in a team environment
        allows me to leverage diverse skills to create well-rounded
        solutions. I am a strong communicator and actively participate
        in discussions to align the final product with client goals.
        Continuous learning is important to me. I embrace new
        technologies and frameworks to enhance my development
        capabilities. Creativity and attention to detail are crucial in
        delivering visually appealing websites with seamless user
        experiences. I'm excited to contribute my skills to impactful
        web experiences. Whether it's an e-commerce platform, a
        personal blog, or a corporate website, I strive to deliver
        high-quality results that exceed expectations. I'm eager to
        collaborate, learn, and grow as a web developer in this
        ever-evolving field.
      </p>
      {/* Your picture and additional information here */}
    </section>
  );
}

export default About;
