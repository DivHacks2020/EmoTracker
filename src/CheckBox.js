import React from "react";

export const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onChange={props.handleCheckElement}
        type="checkbox"
        value={props.value}
      />{" "}
      {props.value}
    </li>
  );
};

export default CheckBox;
