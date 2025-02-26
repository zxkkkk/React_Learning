// src/components/Card.js
import React from "react";
import PropTypes from "prop-types";

const Card = ({ header, body }) => {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
    </div>
  );
};

Card.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
};

export default Card;
