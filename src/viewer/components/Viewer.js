import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Viewer.css";
import { items } from "../generated/meta";
import JSONInput from "react-json-editor-ajrm";
import generateProps from "../utils/props";
import iconBack from "../icons/back.svg";

class Viewer extends React.Component {
  state = { props: null };

  updateProps = data => {
    this.setState({ props: data.jsObject });
  };

  generateProps = propTypes => {
    this.setState({ props: generateProps(propTypes) });
  };

  componentWillMount() {
    const { name } = this.props.match.params;
    const item = items.find(i => i.name === name);
    const { props } = this.state;
    if (!props) {
      this.generateProps(item.propTypes);
    }
  }

  render() {
    const { name } = this.props.match.params;
    const { props } = this.state;
    const item = items.find(i => i.name === name);
    const { Component } = item;
    return (
      <div className="viewer">
        <div className="header">
          <div className="iconBackWrapper">
            <Link to="/">
              <img alt={"back"} src={iconBack} />
            </Link>
          </div>
          <h2>
            <span className="label">Component: </span>
            {name}
          </h2>
          <div className="buttons">
            <a className="button" onClick={this.generateProps}>
              Random Props
            </a>
          </div>
        </div>
        <div className="body">
          <div className="wrapperComponent">
            <Component {...props} />
          </div>
          <div className="wrapperEditor">
            <JSONInput
              id="json_editor"
              placeholder={props}
              width="100%"
              height="100%"
              onChange={this.updateProps}
            />
          </div>
        </div>
      </div>
    );
  }
}

Viewer.propTypes = {
  match: PropTypes.object.isRequired
};

export default Viewer;
