import React from "react";
import PropTypes from "prop-types";
import "./CustomerWidget.css";

const CustomerWidget = props => (
  <div className="customer-widget">
    <div>
      <img alt={props.name} src={props.picture} />
    </div>
    <div className="info">
      <p>{props.name}</p>
      <div>Age: {props.age}</div>
      <div>Balance: {props.balance}</div>
      <a href="!#" onClick={props.clickHandler}>
        Go to details
      </a>
    </div>
  </div>
);

CustomerWidget.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default CustomerWidget;
