import React from "react";
import { items } from "./meta";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Dashboard.css";
import Editor from "./Editor";

const List = () => {
  const listItems = items.map((c, i) => {
    return (
      <li key={i}>
        <Link to={`/editor/${c.name}`}>{c.name}</Link>
      </li>
    );
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

const Dashboard = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={List} />
      <Route path="/editor/:name" component={Editor} />
    </React.Fragment>
  </Router>
);

export default Dashboard;
