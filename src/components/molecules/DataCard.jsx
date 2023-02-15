import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Flexbox from "../containers/Flexbox";
import Heading from "./../atoms/Heading";
import { FiDollarSign } from "react-icons/fi";
function DataCard({ value = "0.000", label = "Data card", Icon = FiDollarSign, color = "light", className = "" }) {
  return (
    <Card className={`data-card${color === "light" ? " data-card-light" : " data-card-dark"}${className ? ` ${className}` : ""}`}>
      <Flexbox className="aic" gap>
        <div className="data-card-icon">
          <Icon size={45} className="flex lh-0" />
        </div>
        <div className="data-card-data">
          <Heading type="3">{value}</Heading>
          <div className="data-card-data-value">{label}</div>
        </div>
      </Flexbox>
    </Card>
  );
}

DataCard.propTypes = {};

export default DataCard;
