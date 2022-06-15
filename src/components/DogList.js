import React from "react";
import Dog from "./Dog";
import "./DogList.css";
import PropTypes from "prop-types";


const DogList = (props) => {
  const dogComponents = props.dogData.map((dog) => {
    return (
      <Dog name={dog.name} favoriteToy={dog.favoriteToy} chipNumber={dog.chipNumber} />
    );
  });

  return (
    <section>
      <h2>Dog count: {props.dogData.length}</h2>
      <ul>{dogComponents}</ul>;
    </section>
  );
};

DogList.propTypes = {
  dogData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DogList;