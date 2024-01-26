import { useState } from "react";
import { useDispatch } from "react-redux";

const FavoriteItem = ({ gif }) => {
  const dispatch = useDispatch();
  const [newInput, setNewInput] = useState("");

  const handleUpdate = () => {
    console.log("in handleupdate", event.target.id);
    dispatch({
      type: "UPDATE_CATEGORY",
      payload: {
        gifId: event.target.id,
        catId: newInput,
      },
    });
    setNewInput("");
  };

  return (
    <div className="gif-box" key={gif.id}>
      <img src={gif.url} />
      <div>Category: {gif.name}</div>
      <input onChange={(event) => setNewInput(event.target.value)} value={newInput} placeholder="New Category"></input>
      <button id={gif.id} onClick={handleUpdate}>
        Update Category
      </button>
    </div>
  );
};

export default FavoriteItem;
