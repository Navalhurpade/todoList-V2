import React, { useState } from "react";

function Input(props) {
  const [inputItem, setInputItem] = useState();

  function clickHandler(event) {
    props.setItem((prevVlaue) => {
      return [...prevVlaue, inputItem];
    });
    setInputItem("");
  }

  function onChangeHandler(event) {
    const value = event.target.value;
    setInputItem(value);
  }

  return (
    <div className="form">
      <input
        value={inputItem}
        name="entry"
        onChange={onChangeHandler}
        type="text"
      />
      <button onClick={clickHandler}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
