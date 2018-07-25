import React from "react";
import { items } from "./meta";
import "./Dashboard.css";
import JSONInput from "react-json-editor-ajrm";
import generateProps from "./props";

class Dashboard extends React.Component {
  state = { item: null };

  selectItem(i) {
    const item = items[i];
    const props = generateProps(item.propTypes);
    this.setState({ item, props });
  }

  updateProps(data) {
    console.log(data);
    this.setState({ ...this.state, props: data.jsObject });
  }

  render() {
    const { item, props } = this.state;
    if (item) {
      const { name, Component } = item;
      return (
        <div className="wrapper">
          <div className="header">
            <h2>{name}</h2>
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
    const listItems = items.map((c, i) => {
      return (
        <li key={i}>
          <a onClick={() => this.selectItem(i)}>{c.name}</a>
        </li>
      );
    });
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Dashboard;
