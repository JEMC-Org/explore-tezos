import React from "react";
import PropTypes from "prop-types";

export default function Section({ name }) {
  return (
    <div className="rounded-2xl bg-grey-400">
      <p>{name}</p>
    </div>
  );
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
};
