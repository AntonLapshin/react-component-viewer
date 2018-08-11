import React from "react";
import { ScaleLoader } from "halogenium";
import "./LoadIndicator.css";

const LoadIndicator = () => (
  <div className="load-indicator">
    <ScaleLoader color="#26A65B" size="16px" margin="4px" />
  </div>
);

export default LoadIndicator;
