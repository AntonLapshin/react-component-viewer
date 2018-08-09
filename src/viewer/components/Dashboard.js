import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { items } from "../generated/meta";
import "./Dashboard.css";
import Viewer from "./Viewer";

class List extends React.Component {
  state = { pattern: "" };

  updatePattern = e => {
    this.setState({ pattern: e.target.value });
  };

  render() {
    const pattern = this.state.pattern.toLowerCase();
    const listItems = items
      .filter(item => item.name.toLowerCase().includes(pattern))
      .map((item, i) => {
        return (
          <li key={i}>
            <Link to={`${process.env.PUBLIC_URL}/viewer/${item.name}`}>{item.name}</Link>
          </li>
        );
      });

    return (
      <div className="dashboard">
        <div className="wrapperSearch">
          <div className="wrapperInput">
            <input
              onChange={this.updatePattern}
              placeholder="Search..."
              value={this.state.pattern}
              spellCheck={false}
            />
            <span className="inputHighlight">
              {this.state.pattern.replace(/ /g, "_")}
            </span>
          </div>
        </div>
        <ul className="items">{listItems}</ul>
      </div>
    );
  }
}

const Dashboard = () => (
  <Router>
    <React.Fragment>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={List} />
      <Route
        path={process.env.PUBLIC_URL + "/viewer/:name"}
        component={Viewer}
      />
    </React.Fragment>
  </Router>
);

export default Dashboard;
