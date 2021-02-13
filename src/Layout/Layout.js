import Sidebar from "../components/Sidebar";
import Data from "../components/Data";
import classes from "./Layout.css";

const layout = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.layout__sidebar}>
        <Sidebar />
      </div>
      <div className={classes.layout__data}>
        <Data />
      </div>
      <div className={classes.layout__charts}>Charts</div>
    </div>
  );
};

export default layout;
