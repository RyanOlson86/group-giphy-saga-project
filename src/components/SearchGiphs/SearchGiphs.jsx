import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchGiphs = () => {
  // state to store input data
  const [newInput, setNewInput] = useState("");
  // initializing dispatch
  const dispatch = useDispatch();
  // submit function to dispatch search request
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch to redux saga 'FETCH_GIPHS' w/ newInput (search) payload
    dispatch({ type: "FETCH_GIPHS", payload: newInput });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => {
          setNewInput(event.target.value);
        }}
        placeholder="Search Giphs"
        value={newInput}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchGiphs;
