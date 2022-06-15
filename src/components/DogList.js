import React from "react";
import Dog from "./Dog";
import "./DogList.css";

const DogList = (props) => {
  const DogComponents = props.dogData.map((dog) => {
    return (
      <Dog name={dog.name} caretaker={dog.caretaker} petCount={dog.petCount} />
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