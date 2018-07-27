import PropTypes from 'prop-types';

const types = [
    'array',
    'bool',
    'func',
    'object',
    'string',
    'symbol',
    'node',
    'element',
    'any'
];

types.forEach(type => {
    PropTypes[type] = new Proxy(PropTypes[type], {
        get: (target, prop) => (prop === 'secret' ? type : target[prop])
    });

    PropTypes[type].isRequired = new Proxy(PropTypes[type].isRequired, {
        get: (target, prop) => (prop === 'secret' ? type : target[prop])
    });
});
