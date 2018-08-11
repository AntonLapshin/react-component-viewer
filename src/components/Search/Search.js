import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import "./Search.css";

const defaultDebounceDelay = 300;

const Search = ({
  value = "",
  changeHandler,
  debounceDelay = defaultDebounceDelay
}) => {
  const debounceHandler = debounce(
    value => changeHandler && changeHandler(value),
    debounceDelay
  );

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        onChange={e => (e.persist(), debounceHandler(e.target.value))}
        placeholder="Search..."
        value={value}
        spellCheck={false}
      />
      <span className="input-highlight">{value.replace(/ /g, "_")}</span>
    </div>
  );
};

Search.propTypes = {
  debounceDelay: PropTypes.number,
  value: PropTypes.string,
  changeHandler: PropTypes.func
};

export default Search;
