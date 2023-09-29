// Project.jsx
import React from "react";

function Project({ title, deployedLink, githubLink, imageSrc, description }) {
  return (
    <div className="cardContainer col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{description}</p>
          <a href={deployedLink} className="btn btn-primary">View Deployed</a>
          <a href={githubLink} className="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
