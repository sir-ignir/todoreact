import { useState } from "react";

const Form = ({ albumId, setAlbumId }) => {
  const [inputValue, setInputValue] = useState(albumId);
  return (
    <div id="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAlbumId(inputValue);
        }}
      >
        <label>album number</label>
        <input
          type="number"
          style={{ with: 50, marginLeft: 12, marginRight: 12 }}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
