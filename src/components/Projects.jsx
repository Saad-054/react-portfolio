import React from "react";
import Project from "./Project"; // Import the Project component here
import ledImage from "../assets/images/led.jpg"; // Import the images
import calcImage from "../assets/images/calc.jpg";
import runImage from "../assets/images/run.jpg";
import pastelImage from "../assets/images/pastel.png";

const projectsData = [
  {
    title: "LED Wall",
    deployedLink: "#",
    githubLink: "#",
    imageSrc: ledImage, // Use the imported image
    description: "Node/IoT",
  },
  {
    title: "Calculator",
    deployedLink: "#",
    githubLink: "#",
    imageSrc: calcImage, // Use the imported image
    description: "React/JavaScript/CSS",
  },
  {
    title: "Run Buddy",
    deployedLink: "#",
    githubLink: "#",
    imageSrc: runImage, // Use the imported image
    description: "HTML/CSS",
  },
  {
    title: "Pastel",
    deployedLink: "#",
    githubLink: "#",
    imageSrc: pastelImage, // Use the imported image
    description: "MERN Stack",
  },
  // Add more project objects as needed
];

function Projects() {
  return (
    <section id="work" className="text-center">
      <h3>My Work</h3>
      <div className="row">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
