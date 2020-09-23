import React from "react";
import { connect } from "frontity";

const Search = ({ state, actions }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Szukaj"
        value={state.theme.searchValue}
        onChange={() => {
          actions.theme.changeSearchValue(event.target.value);
        }}
      />
      <p>Szukana fraza: {state.theme.searchValue}</p>
    </>
  );
};

export default connect(Search);
