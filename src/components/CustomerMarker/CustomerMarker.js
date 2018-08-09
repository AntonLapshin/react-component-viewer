import React from "react";
import PropTypes from "prop-types";
import "./CustomerMarker.css";

const CustomerMarker = props => {
  let classes = "customer-marker";
  props.isSelected && (classes += " selected");
  return <span className={classes}>{props.balance}</span>;
};

CustomerMarker.propTypes = {
  balance: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
};

export default CustomerMarker;
