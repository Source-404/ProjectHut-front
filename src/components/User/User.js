import { useState } from "react";
import ProfileDescription from "./ProfileDescription";
import ProjectList from "../Projects/ProjectList";
import classes from "./User.module.css";

const User = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Source Code",
    email: "source@gmail.com",
    age: 404,
    joined: "25th nov 6969",
  });
  const [projects, setProjects] = useState([
    {
      id: 4,
      title: "Project 1",
      description: "This is the description for the first Project",
      completed: "true",
    },
    {
      id: 5,
      title: "Second Project",
      description: "yet another description for the second Project",
      completed: "false",
    },
    {
      id: 6,
      title: "The Third Project",
      description: "yet another description for the second Project",
      completed: "false",
    },
  ]);

  return (
    <>
      <div className={classes.showBox}>
        <ProfileDescription
          name={user.name}
          email={user.email}
          age={user.age}
          joined={user.joined}
          name={user.name}
        />
      </div>
      <ProjectList items={projects} />
    </>
  );
};

export default User;
