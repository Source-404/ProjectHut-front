import ListItem from "./ListItem";
import classes from "./ProjectList.module.css";

const ProjectList = (props) => {
  const projects = props.items;

  return (
    <ul className={classes.projectslist}>
      {projects.map((project) => {
        return (
          <ListItem
            key={project._id}
            title={project.title}
            description={project.description}
            completed={project.completed}
          />
        );
      })}
    </ul>
  );
};

export default ProjectList;
