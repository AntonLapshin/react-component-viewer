import React from 'react';
import { items } from './meta';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { debounce } from 'lodash';
import './Dashboard.css';
import Editor from './Editor';

class List extends React.Component {
    state = { pattern: '' };

    updatePattern = debounce(value => {
        this.setState({ pattern: value });
    }, 100);

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
                <input
                    className="pattern"
                    type="text"
                    value={pattern}
                    placeholder="Enter your component name"
                    onChange={e => this.updatePattern(e.target.value)}
                />
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
