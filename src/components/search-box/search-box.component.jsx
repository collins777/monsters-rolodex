import React from "react";
import "./search-box.styles.css";

// Functional Components:
// unlike class components they dont
// have access to state, cunstructor(),
// or lifecylce methods

// Functional componetns should be used when
// we only want to render some HTML 'JSX' on screen

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      // sets value of this.state.searchField to match users input
      onChange={handleChange}
    />
  );
};
