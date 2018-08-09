import React from "react";
import PropTypes from "prop-types";
import NavItem from "../NavItem/NavItem";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div className="nav-bar">
      {props.items.map((item, i) => (
        <NavItem
          key={i}
          {...item}
          isActive={props.pathname === item.name}
          clickHandler={() => props.changeHandler(item)}
        />
      ))}
    </div>
  );
};

NavBar.props = {
  items: PropTypes.array.isRequired,
  changeHandler: PropTypes.func.isRequired,
  pathname: PropTypes.string
};

export default NavBar;
