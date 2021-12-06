import FileUpload from "../../UI/FileUpload";
import { useState } from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const [ready, setReady] = useState(false);

  const logger = () => {
    console.log(props.id);
  };

  const upload = () => {
    console.log("ready to upload");
    setReady(true);
  };

  const onConfirm = () => {
    setReady(false);
  };

  return (
    <>
      <FileUpload ready={ready} projId={props.id} onConfirm={onConfirm} />
      <div onClick={logger} className={classes.card}>
        <header className={classes.cardHeader}>
          <p>Nov 16th 2021</p>
          <h2>{props.title}</h2>
        </header>
        <p>{props.description}</p>
        <h4>completed: {props.completed}</h4>
        <button onClick={upload}>upload file</button>
      </div>
    </>
  );
};

export default ListItem;
