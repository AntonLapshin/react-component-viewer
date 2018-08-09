import React from "react";
import PropTypes from "prop-types";
import "./ValueWidget.css";

const ValueWidget = props => {
  return (
    <div className="value-widget">
      <span className="title">{props.title}</span>
      <span className="value">{props.value}</span>
    </div>
  );
};

ValueWidget.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default ValueWidget;
