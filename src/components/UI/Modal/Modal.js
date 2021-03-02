import classes from "./Modal.css";
import Aux from "../../../Aux";
import Backdrop from "../Backdrop/Backdrop";
import { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.modal}
          style={{
            transform: this.props.show ? "translateX(0)" : "translateX(100vw)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Add Transaction</h2>
          <div style={{ display: "flex", flexFlow: "column" }}>
            <label for="inlineFormCustomSelect">Select Category</label>
            <select
              class="custom-select"
              id="inlineFormCustomSelect"
              style={{ width: "50%" }}
            >
              <option selected>Choose...</option>
              <option value="1">Food</option>
              <option value="2">Transportation</option>
              <option value="3">Credit Card Bills</option>
            </select>
            <label for="amount">Enter amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              style={{ width: "50%", appearance: "textfield" }}
              step="any"
            />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Modal;
