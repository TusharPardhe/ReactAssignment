import React from "react";

const Button = (props) => {
  const getBtnClass = (col) => {
    if (col === "blue") return "primary";
    if (col === "green") return "success";
    if (col === "black") return "dark";
    if (col === "red") return "danger";
  };
  const btnSimilarClass = "btn btn-sm m-2 btn-circle btn-";
  return (
    <div className="col">
      <button
        type="button"
        className={btnSimilarClass + getBtnClass(props.color)}
        onClick={() => {
          props.updateCost(props.cost);
          props.updateColor(props.color);
        }}
        onMouseOver={() => {
          props.updateCost(props.cost);
          props.updateColor(props.color);
        }}
      ></button>
    </div>
  );
};

export default Button;
