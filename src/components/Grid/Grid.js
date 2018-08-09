import React from "react";
import PropTypes from "prop-types";
import "./Grid.css";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Grid = props => {
  const { layout, options, widgets } = props;
  const { cols, rowHeight, width } = options;

  return (
    <div className="grid">
      <GridLayout
        className="layout"
        cols={cols}
        rowHeight={rowHeight}
        width={width}
      >
        {layout.map((l, i) => (
          <div key={i} data-grid={l}>
            {widgets[i]}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

Grid.props = {
  layout: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  widgets: PropTypes.arrayOf(PropTypes.node)
};

export default Grid;
