import dummyjson from "dummy-json";

const strings = {
  value: "{{int 100 200}}",
  id: "{{int 1 20}}",
  name: "{{firstName}} {{lastName}}",
  work: "{{company}}",
  email: "{{email}}",
  date: "{{date '2010' '2019' 'DD.MM.YYYY'}}",
  time: "{{time '09:00' '17:30'}}",
  address: "{{int 1 100}} {{street}}",
  city: "{{city}}",
  lorem: "{{lorem 2}}"
};

const PropTypesTransform = {
  bool: () => dummyjson.parse("{{boolean}}") === 'true',
  number: () => dummyjson.parse("{{int 1 100}}"),
  array: () =>
    ["{{lorem 1}}", "{{lorem 1}}", "{{lorem1}}"].map(i => dummyjson.parse(i)),
  object: () => {
    return {};
  },
  string: name => {
    const template =
      strings[
        Object.keys(strings).find(
          key => name.toLowerCase().indexOf(key) !== -1
        ) || "lorem"
      ];
    return dummyjson.parse(template);
  },
  any: () => dummyjson.parse("{{lorem 5}}"),
  node: () => "",
  element: () => "",
  func: name => () => window.notify(`${name} handler executed!`)
};

export default (propTypes = {}) => {
  const props = Object.keys(propTypes).reduce((result, name) => {
    result[name] = PropTypesTransform[
      propTypes[name].getTypeDefinition().type.name
    ](name);
    return result;
  }, {});
  return props;
};
