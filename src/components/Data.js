import AddCircleIcon from "@material-ui/icons/AddCircle";
import React, { useState } from "react";

import Aux from "../Aux";
import classes from "./Data.css";

const Data = (props) => {
  return (
    <Aux>
      <div className={classes.header}>
        <h1>Daily Transactions</h1>
        <a href="#">
          <AddCircleIcon className={classes.headerIcon} />
        </a>
      </div>
      <div className={classes.input}>
        <input
          type="text"
          className={classes.inputSearch}
          placeholder="Search"
        />
      </div>
      <ul className={classes.list}>
        <li>
          Chinese Dinner&nbsp;:{" "}
          <span className={classes.list__item}>
            $45.99
            <sub className={classes.list__cat}>Food</sub>
          </span>
        </li>
        <li>
          Trip to Nagpur &nbsp;:{" "}
          <span className={classes.list__item}>
            $45.99
            <sub className={classes.list__cat}>Travel</sub>
          </span>
        </li>
        <li>
          H&M T-shirt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          <span className={classes.list__item}>
            $45.99
            <sub className={classes.list__cat}>Clothes</sub>
          </span>
        </li>
      </ul>
    </Aux>
  );
};

export default Data;
