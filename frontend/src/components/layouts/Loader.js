import React from "react";
import { AtomSpinner } from "react-epic-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
      <AtomSpinner color="#fa9c23" size={100} className="spinner" />
    </div>
  );
};

export default Loader;
