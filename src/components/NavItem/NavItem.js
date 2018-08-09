import React from "react";
import PropTypes from "prop-types";
import "./NavItem.css";

const NavItem = props => {
  let classes = "nav-item";
  props.isSelected && (classes += " active");
  return (
    <div className={classes} onClick={props.clickHandler}>
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
