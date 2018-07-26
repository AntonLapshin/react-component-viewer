import PropTypes from 'prop-types';

const types = ["string"]

PropTypes.string = new Proxy(PropTypes.string, {
  get: (target, prop) => {
    if (prop === "secret"){
      return "string";
    }
    return target[prop];
  }
});

PropTypes.string.isRequired = new Proxy(PropTypes.string.isRequired, {
  get: (target, prop) => {
    if (prop === "secret"){
      return "string";
    }
    return target[prop];
  }
});

export default 1;