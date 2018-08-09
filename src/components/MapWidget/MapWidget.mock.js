import React from "react";

const createLabel = (name, amount) => (
  <div>
    {name} {amount}
  </div>
);

export default {
  items: [
    {
      label: createLabel("Customer 1", 1000),
      lat: -34.397,
      lng: 150.644
    },
    {
      label: createLabel("Customer 2", 1200),
      lat: -34.497,
      lng: 150.644
    },
    {
      label: createLabel("Customer 3", 1300),
      lat: -34.597,
      lng: 150.644
    }
  ],
  clickHandler: index =>
    window.notify("Selected item: " + index)
};
