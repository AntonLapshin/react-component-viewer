import React from "react";
import PropTypes from "prop-types";
import "./MapWidget.css";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

const mapStyles = { height: "100%" };
const labelStyles = {
  textAlign: "center",
  width: "100px"
};
const labelAnchor = { x: 50, y: 0 };
const defaultZoom = 2;
const defaultCenter = { lat: 48, lng: 11 };

const MapWidget = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={mapStyles} />,
    containerElement: <div style={mapStyles} />,
    mapElement: <div style={mapStyles} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
    {props.items.map((item, i) => {
      const { lat, lng, label } = item;
      return (
        <MarkerWithLabel
          key={i}
          position={{ lat, lng }}
          labelStyle={labelStyles}
          labelAnchor={labelAnchor}
          onClick={() => props.clickHandler(item.id)}
        >
          {label}
        </MarkerWithLabel>
      );
    })}
  </GoogleMap>
));

MapWidget.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    })
  ),
  clickHandler: PropTypes.func
};

export default MapWidget;
