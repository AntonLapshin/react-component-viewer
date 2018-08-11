import React from "react";
import PropTypes from "prop-types";
import "./PaginationTable.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

const defaultOptions = {
  defaultPageSize: 10
};

const PaginationTable = props => {
  const { data, options, visibleColumns, rowClickHandler } = props;

  const columns = visibleColumns.map(key => ({
    Header: key,
    accessor: key
  }));

  return (
    <div className="pagination-table">
      <ReactTable
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              rowClickHandler && rowClickHandler(rowInfo.original);
              if (handleOriginal) {
                handleOriginal();
              }
            }
          };
        }}
        data={data}
        columns={columns}
        {...{ ...defaultOptions, ...options }}
      />
    </div>
  );
};

PaginationTable.props = {
  data: PropTypes.array.isRequired,
  visibleColumns: PropTypes.array.isRequired,
  options: PropTypes.object,
  rowClickHandler: PropTypes.func
};

export default PaginationTable;
