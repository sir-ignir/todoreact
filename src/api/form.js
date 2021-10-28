import { useState } from "react";
const form = (albumId) => {
  const [inputValue, setInputValue] = useState(albumId);
  return (
    <div id="form">
      <form>
        <label>album number</label>
        <input
          type="number"
          style={{ with: 50, marginLeft: 12, marginRight: 12 }}
          value={inputValue}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default form;
