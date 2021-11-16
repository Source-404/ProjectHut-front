import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={classes.card}>
      <header className={classes.cardHeader}>
        <p>Nov 16th 2021</p>
        <h2>{props.title}</h2>
      </header>
      <p>{props.description}</p>
      <h4>completed: {props.completed}</h4>
    </div>
  );
};

export default ListItem;
