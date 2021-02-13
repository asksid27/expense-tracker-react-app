import { Component } from "react";

import classes from "./Sidebar.css";
import Aux from "../Aux";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/category/list-categories")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          Categories: result,
        });
        console.log(this.state.Categories);
      });
  }

  render() {
    return (
      <Aux>
        <span className={classes.sidebar__cat}>CATEGORIES</span>
        {this.state.Categories.map((item) => (
          <span className={classes.sidebar__catName} key={item.id}>
            {item.name}
          </span>
        ))}
      </Aux>
    );
  }
}

export default Sidebar;
