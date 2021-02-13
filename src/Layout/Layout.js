import classes from "./Layout.css";

const layout = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.layout__toolbar}>Toolbar</div>
      <div className={classes.layout__sidebar}>SideBar</div>
      <div className={classes.layout__data}>Data</div>
      <div className={classes.layout__charts}>Charts</div>
    </div>
  );
};

export default layout;
