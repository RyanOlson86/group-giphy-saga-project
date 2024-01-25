import axios from "axios";

const SearchGiphs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('button clicked')
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button>Search</button>
    </form>
  );
};

export default SearchGiphs;
