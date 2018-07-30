import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import patchPropTypes from 'prop-types-definition';
import Dashboard from './viewer/components/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import "./viewer/main.css";

patchPropTypes(PropTypes);

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();