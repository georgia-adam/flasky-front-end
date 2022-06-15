import React from "react";
import PropTypes from "prop-types";

const Dog = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.favoriteToy}</h4>
      <h4>Chip Number: {props.chipNumber}</h4>
      <button>Pet Dog</button>
    </li>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  favoriteToy: PropTypes.string,
  petCount: PropTypes.number,
};

export default Dog;