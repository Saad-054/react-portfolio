import React from "react";
import photoImage from "../assets/images/photo.png"; // Import the image

function Home() {
  return (
    <section id="hero" className="text-center">
      <h1>My Portfolio</h1>
      <p className="portfolio-description">
        Turning Ideas into Interactive Reality: Transforming your vision into a responsive and user-centric web presence.
      </p>
      <img src={photoImage} alt="Saad Siddiqui" /> {/* Use the imported image */}
      <p>
      As a junior web developer, I am passionate about creating engaging and user-friendly websites. With a strong foundation in coding and a drive for learning new technologies, I continuously expand my skills to stay up-to-date with industry trends. I have proficiency in HTML, CSS, and JavaScript—the building blocks of the web. I develop responsive and mobile-friendly websites that adapt to different devices. I also have experience with frameworks like Bootstrap and libraries like jQuery, which streamline development and enhance website functionality. Collaboration and problem-solving are key aspects of web development. Working in a team environment allows me to leverage diverse skills to create well-rounded solutions. I am a strong communicator and actively participate in discussions to align the final product with client goals. Continuous learning is important to me. I embrace new technologies and frameworks to enhance my development capabilities. Creativity and attention to detail are crucial in delivering visually appealing websites with seamless user experiences. I'm excited to contribute my skills to impactful web experiences. Whether it's an e-commerce platform, a personal blog, or a corporate website, I strive to deliver high-quality results that exceed expectations. I'm eager to collaborate, learn, and grow as a web developer in this ever-evolving field.
      </p>
    </section>
  );
}

export default Home;
