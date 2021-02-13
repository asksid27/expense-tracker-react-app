import classes from "./Sidebar.css";
import Aux from "../Aux";

const sidebar = () => {
  return (
    <Aux>
      <span className={classes.sidebar__cat}>CATEGORIES</span>
      <span className={classes.sidebar__catName}>Food</span>
      <span className={classes.sidebar__catName}>Travel</span>
      <span className={classes.sidebar__catName}>Clothes</span>
      <span className={classes.sidebar__catName}>Something</span>
    </Aux>
  );
};

export default sidebar;
