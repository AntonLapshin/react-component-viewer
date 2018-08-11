import React from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends React.PureComponent {
  constructor({ value }) {
    super();
    this.state = { value: value || "" };
  }

  componentWillReceiveProps({ value }) {
    this.setState({ value });
  }

  updateValue = e => {
    const value = e.target.value;
    this.setState({ value });
    this.props.changeHandler && this.props.changeHandler(value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="search">
        <input
          type="text"
          className="search-input"
          onChange={this.updateValue}
          placeholder="Search..."
          value={value}
          spellCheck={false}
        />
        <span className="input-highlight">{value.replace(/ /g, "_")}</span>
      </div>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func
};

export default Search;
