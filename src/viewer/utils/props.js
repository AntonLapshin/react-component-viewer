const PropTypesTransform = {
  string: name => {
    return name;
  },
  func: name => {
    return () => window.notify(`${name} handler executed!`);
  }
};

export default propTypes => {
  const props = Object.keys(propTypes).reduce((result, name) => {
    result[name] = PropTypesTransform[propTypes[name].secret](name);
    return result;
  }, {});
  return props;
};
