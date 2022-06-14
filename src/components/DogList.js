import React from "react";
import Dog from "./Dog";
import "./DogList.css";

const DogList = () => {
  return (
    <ul>
      <Dog />
      <Dog />
      <Dog />
    </ul>
  );
};

export default DogList;
