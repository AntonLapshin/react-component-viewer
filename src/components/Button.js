import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
