import React from "react";
import CustomerMarker from "../CustomerMarker/CustomerMarker";

const createLabel = props => <CustomerMarker {...props} />;

export default {
  items: [
    {
      label: createLabel({
        balance: "$1,461.65",
        isSelected: true
      }),
      lat: -34.397,
      lng: 150.644
    },
    {
      label: createLabel({
        balance: "$2,461.65",
        isSelected: false
      }),
      lat: -34.497,
      lng: 150.744
    },
    {
      label: createLabel({
        balance: "$3,461.65",
        isSelected: false
      }),
      lat: -34.697,
      lng: 150.544
    }
  ],
  clickHandler: index => window.notify("Selected item: " + index)
};
