import React from "react";
import PropTypes from "prop-types";

const Dog = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Caretaker: {props.caretaker}</h4>
      <h4>Pet count: {props.petCount}</h4>
      <button>Pet Dog</button>
    </li>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string,
  petCount: PropTypes.number,
};

export default Dog;