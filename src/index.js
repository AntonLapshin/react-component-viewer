import propTypes from './viewer/utils/propTypes';
import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import Dashboard from './viewer/components/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();