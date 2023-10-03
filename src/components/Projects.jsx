import React from "react";
import Project from "./Project"; // Import the Project component here
// import weatherImage from "../assets/images/weather.jpg"; // Import the images
import passwordImage from "../assets/images/password.webp";
import schedulerImage from "../assets/images/scheduler.jpg";
import quizImage from "../assets/images/quiz.jpg";

const projectsData = [
  {
    title: "Server APIs: Weather Dashboard",
    deployedLink: "https://saad-054.github.io/Weather_Dashboard/",
    githubLink: "https://github.com/Saad-054/Weather_Dashboard",
    // imageSrc: weatherImage, // Use the imported image
    description: "Server APIs: Weather Dashboard",
    // weather image
  },
  {
    title: "Third-Party APIs: Daily Planner App",
    deployedLink: "https://saad-054.github.io/Daily-Planner_App/",
    githubLink: "https://github.com/Saad-054/Daily-Planner_App",
    imageSrc: schedulerImage, // Use the imported image
    description: "Third-Party APIs: Daily Planner App",
    // scheduler
  },
  {
    title: "Web APIs: Code Quiz",
    deployedLink: "https://saad-054.github.io/Code_Quiz/",
    githubLink: "https://github.com/Saad-054/Code_Quiz",
    imageSrc: quizImage, // Use the imported image
    description: "Web APIs: Code Quiz",
    // quiz
  },
  {
    title: "JavaScript: Password Generator",
    deployedLink: "https://saad-054.github.io/Password-Generator/",
    githubLink: "https://github.com/Saad-054/Password-Generator",
    imageSrc: passwordImage, // Use the imported image
    description: "JavaScript: Password Generator",
    // password
  },
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
