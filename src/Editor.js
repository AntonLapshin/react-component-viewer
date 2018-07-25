import React from "react";
import PropTypes from "prop-types";
import "./Editor.css";
import { items } from "./meta";
import JSONInput from "react-json-editor-ajrm";
import generateProps from "./props";
import iconBack from "./icons/back.svg";

class Editor extends React.Component {
  state = { props: null };

  updateProps(data) {
    console.log(data);
    this.setState({ props: data.jsObject });
  }

  generateProps(propTypes) {
    this.setState({ props: generateProps(propTypes) });
  }

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
      <div className="editor">
        <div className="header">
          <div className="iconBackWrapper">
            <img alt={"back"} src={iconBack} />
          </div>
          <h2>
            <span className="label">Component: </span>
            {name}
          </h2>
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
              onChange={data => this.updateProps(data)}
            />
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  match: PropTypes.object.isRequired
};

export default Editor;
