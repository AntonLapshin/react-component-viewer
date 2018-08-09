import React from "react";
import ValueWidget from "../ValueWidget/ValueWidget";
import CustomerWidget from "../CustomerWidget/CustomerWidget";
import CustomerWidgetMock from "../CustomerWidget/CustomerWidget.mock";
import MapWidget from "../MapWidget/MapWidget";
import MapWidgetMock from "../MapWidget/MapWidget.mock";

const layout = [
  {
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    minW: 4,
    minH: 3,
    isDraggable: false
  },
  {
    x: 6,
    y: 0,
    w: 3,
    h: 6,
    minH: 2,
    minW: 2,
    maxW: 4,
    maxH: 4
  },
  {
    x: 0,
    y: 5,
    w: 3,
    h: 2,
    minH: 1,
    minW: 1,
    maxW: 4,
    maxH: 4
  },
  {
    x: 3,
    y: 5,
    w: 3,
    h: 2,
    minH: 1,
    minW: 1,
    maxW: 4,
    maxH: 4
  },
  {
    x: 6,
    y: 5,
    w: 3,
    h: 2,
    minH: 1,
    minW: 1,
    maxW: 4,
    maxH: 4
  }
];

export default {
  options: {
    cols: 12,
    rowHeight: 50,
    width: 1200
  },
  layout,
  widgets: [
    <MapWidget {...MapWidgetMock} />,
    <CustomerWidget {...CustomerWidgetMock} />,
    <ValueWidget title="Customer Count" value="132" />,
    <ValueWidget title="Average age" value="33" />,
    <ValueWidget title="Standard Deviation" value="300" />
  ]
};
