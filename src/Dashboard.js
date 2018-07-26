import React from "react";
import { items } from "./meta";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { debounce } from "lodash";
import "./Dashboard.css";
import iconSearch from "./icons/search.svg";
import Editor from "./Editor";

class List extends React.Component {
  state = { pattern: "" };

  updatePattern = function(e) {
    this.setState({ pattern: e.target.value });
  }.bind(this);

  render() {
    const pattern = this.state.pattern.toLowerCase();
    const listItems = items
      .filter(item => item.name.toLowerCase().includes(pattern))
      .map((item, i) => {
        return (
          <li key={i}>
            <Link to={`/editor/${item.name}`}>{item.name}</Link>
          </li>
        );
      });

    return (
      <div className="dashboard">
        <div className="searchWrapper">
          <div className="inputWrapper">
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
      <Route exact path="/" component={List} />
      <Route path="/editor/:name" component={Editor} />
    </React.Fragment>
  </Router>
);

export default Dashboard;
