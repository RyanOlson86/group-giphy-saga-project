import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoriteItem = ({ gif }) => {
  const dispatch = useDispatch();
  const categoryStore = useSelector((store) => store.categoryList);

  const handleUpdate = (event) => {
    event.preventDefault()
    const categoryId = document.getElementById(gif.id).value
    console.log("in handleupdate", categoryId);
    
    dispatch({
      type: "UPDATE_CATEGORY",
      payload: {
        gifId: gif.id,
        catId: categoryId,
      },
    });
  };

  return (
    <div className="gif-box" key={gif.id}>
      <img src={gif.url} />
      <div>Category: {gif.name}</div>
      <form action="submit" onSubmit={handleUpdate}>
        <label>Update Category: </label>
        <select id={gif.id}>
          {categoryStore.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input  type="submit" value="Update Category" />
      </form>

      {/* <input onChange={(event) => setNewInput(event.target.value)} value={newInput} placeholder="New Category"></input> */}
    </div>
  );
};

export default FavoriteItem;
