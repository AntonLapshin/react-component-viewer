import React from "react";
import PropTypes from "prop-types";

const Label = props => {
  return <div>{props.text}</div>;
};

Label.propTypes = {
  text: PropTypes.string.isRequired
}

export default Label;