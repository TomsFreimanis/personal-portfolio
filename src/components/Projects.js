import React, { useState } from "react";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/cban.jpg";
import "./projects.css";
import "font-awesome/css/font-awesome.min.css";
import Spline from "@splinetool/react-spline";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
function Projects() {
  const [projectsToShow, setProjectsToShow] = useState(3); // Initial number of projects to show
  const projects = [
    {
      title: "MERN workout-app",
      description:
        "The MERN workout-app is a web application developed using the MERN stack, which includes MongoDB, Express.js, React, and Node.js The app allows users to create workout cards, to follow there progress. Everything is saved in MongoDB database.",
      tags: ["React", "JavaScript", "Express.js", "Node.js"],
      liveDemoLink: "https://example.com/demo1",
      githubRepoLink: "https://github.com/example/repo1",
      imageSrc: projImg1,
    },
    {
      title: "MERN todo-app",
      description:
        "The MERN todo app is a web application built using the MERN stack, comprising MongoDB, Express.js, React, and Node.js. It serves as a task management tool that enables users to create, organize, and track their to-do lists. With this app, users can add tasks, set due dates, mark tasks as completed.",
      tags: ["React", "JavaScript", "Express.js", "Node.js"],
      liveDemoLink: "https://example.com/demo2",
      githubRepoLink: "https://github.com/example/repo2",
      imageSrc: projImg2,
    },
    {
      title: "Food recipes app",
      description:
        "Introducing a delightful food recipes app crafted with ReactJS and powered by an API",
      tags: ["Vue.js", "JavaScript", "API"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: projImg1,
    },
    {
      title: "Project 4",
      description: "Description of Project 3",
      tags: ["React", "JavaScript", "Api"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: projImg1,
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: projImg1,
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: projImg1,
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: projImg1,
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: projImg1,
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: projImg1,
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: projImg1,
    },
  ];

  const loadMoreProjects = () => {
    // Increase the number of projects to show by 3
    setProjectsToShow(projectsToShow + 3);
  };

  return (
    <section className="projects" id="projects">
      <div className="skill-bx wow zoomIn">
        <h1>Projects</h1>
      </div>
      <div className="container con">
        <div className="row">
          {projects.slice(0, projectsToShow).map((project, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="spline-icon">
                  <a
                    href={project.githubRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <Spline scene="https://prod.spline.design/1U7lkFOXA6tBGEqT/scene.splinecode" />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <div className="card-tags">
                    {project.tags.map((tag, index) => (
                      <span className="badge badge-primary" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* <div className="card-links">
                    <a
                      href={project.githubRepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <Spline scene="https://prod.spline.design/1U7lkFOXA6tBGEqT/scene.splinecode" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
<div className="splinediv">
{projectsToShow < projects.length && (
            <div className="col-2 ">
              <Spline
                scene="https://prod.spline.design/4KIwxMyoWkStvWcR/scene.splinecode"
                onClick={loadMoreProjects}
              ></Spline>
            </div>
          )}
</div>
     
        </div>
      </div>
    </section>
  );
}

export default Projects;
