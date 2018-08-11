import React from "react";
import PropTypes from "prop-types";
import "./PaginationTable.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

const defaultOptions = {
  defaultPageSize: 10
};

const PaginationTable = props => {
  const { data, options, visibleColumns } = props;

  let keys = Object.keys(data[0]);
  if (visibleColumns) {
    keys = keys.filter(key => visibleColumns.includes(key));
  }

  const columns = keys.map(key => ({
    Header: key,
    accessor: key
  }));

  return (
    <div className="pagination-table">
      <ReactTable
        data={data}
        columns={columns}
        {...{ ...defaultOptions, ...options }}
      />
    </div>
  );
};

PaginationTable.props = {
  data: PropTypes.array.isRequired,
  visibleColumns: PropTypes.array,
  options: PropTypes.object
};

export default PaginationTable;
