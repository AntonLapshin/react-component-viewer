import React from "react";
import PropTypes from "prop-types";
import "./NavItem.css";

const NavItem = props => {
  const classes = ["nav-item"];
  if (props.isActive) {
    classes.push("active");
  }
  return (
    <div className={classes.join(" ")} onClick={props.clickHandler}>
      {props.name}
    </div>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired
};

export default NavItem;
