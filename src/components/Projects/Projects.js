import { useState, useContext } from "react";

import ProjectList from "./ProjectList";
import classes from "./Projects.module.css";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "This is the description for the first Project",
      completed: "true",
    },
    {
      id: 2,
      title: "Second Project",
      description: "yet another description for the second Project",
      completed: "false",
    },
    {
      id: 3,
      title: "The Third Project",
      description: "yet another description for the second Project",
      completed: "false",
    },
  ]);

  return (
    <div className={classes.container}>
      <ProjectList items={projects} />
    </div>
  );
};

export default Projects;
