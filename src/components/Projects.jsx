// Projects.js
import React from "react";
import Project from "./Project"; // Import the Project component here

const projectsData = [
  {
    title: "LED Wall",
    deployedLink: "#",
    githubLink: "#",
    imageSrc: "../assets/images/led.jpg",
    description: "Node/IoT"
  },
  {
    title: "Calculator",
    deployedLink: "#",
    githubLink: "#",
    imageSrc: "./assets/images/calc.jpg",
    description: "React/JavaScript/CSS"
  },
  {
    title: "Run Buddy",
    deployedLink: "#",
    githubLink: "#",
    imageSrc: "./assets/images/run.jpg",
    description: "HTML/CSS"
  },
  {
    title: "Pastel",
    deployedLink: "#",
    githubLink: "#",
    imageSrc: "./assets/images/pastel.png",
    description: "MERN Stack"
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