import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Viewer.css";
import { items } from "../generated/meta";
import JSONInput from "react-json-editor-ajrm";
import generateProps from "../utils/props";
import iconBack from "../icons/back.svg";

window.notify = message =>
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: "foo-bar"
  });

class Viewer extends React.Component {
  state = { props: null };

  updateProps = data => {
    this.setState({ props: data.jsObject });
  };

  generateProps = () => {
    const { name } = this.props.match.params;
    const item = items.find(i => i.name === name);
    this.setState({ props: generateProps(item.Component.propTypes) });
  };

  resetProps = () => {
    const { name } = this.props.match.params;
    const item = items.find(i => i.name === name);
    this.setState({ props: item.mock });
  };

  componentWillMount() {
    const { name } = this.props.match.params;
    const item = items.find(i => i.name === name);
    const { props } = this.state;
    if (item.mock) {
      this.setState({ props: item.mock });
    } else if (!props) {
      this.generateProps();
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
            {item.mock && (
              <a className="button" onClick={this.resetProps}>
                Reset Props
              </a>
            )}
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
            <ToastContainer />
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
