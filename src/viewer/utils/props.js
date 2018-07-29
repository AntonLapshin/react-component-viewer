// const random = (min, max) => Math.random() * (max - min) + min;

const PropTypesTransform = {
    bool: name => {
        return true;
    },
    object: name => {
        return {};
    },
    string: name => {
        return name;
    },
    func: name => {
        return () => window.notify(`${name} handler executed!`);
    }
};

export default (propTypes = {}) => {
    const props = Object.keys(propTypes).reduce((result, name) => {
        result[name] = PropTypesTransform[propTypes[name].getTypeDefinition().type.name](name);
        return result;
    }, {});
    return props;
};
