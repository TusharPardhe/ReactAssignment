import React, { useState } from "react";
import Button from "./buttonSpawn";
import red from "./images/red.png";
import green from "./images/green.png";
import blue from "./images/blue.png";
import black from "./images/black.png";

const Card = (props) => {
  const { card } = props;
  const { cardType } = props;
  // console.log(cardType.cost);
  const [defCost, setCost] = useState(cardType.cost);
  const [imgColor, setColor] = useState(cardType.color);
  const getColor = (color) => {
    if (color === "red") return red;
    if (color === "blue") return blue;
    if (color === "green") return green;
    if (color === "black") return black;
  };

  const updateCost = (cost) => {
    setCost((defCost) => cost);
  };

  const updateColor = (color) => {
    setColor((imgColor) => color);
    getColor(imgColor);
  };

  const spawn = () => {
    let buttons = [];
    let typesOfCards = props.card.variant;
    for (let i = 0; i < typesOfCards.length; i++) {
      // console.log(typesOfCards[i].cost);
      buttons.push(
        <Button
          key={typesOfCards[i].variationId}
          color={typesOfCards[i].color}
          cost={typesOfCards[i].cost}
          updateCost={updateCost}
          updateColor={updateColor}
        />
      );
    }

    return buttons;
  };
  return (
    <div className="card flex-row flex-wrap m-2">
      <div className="card-header border-10">
        <img src={getColor(imgColor)} alt="" />
      </div>
      <div className="card-block px-2">
        <h4 className="card-title">Product :{card.productName}</h4>
        <p className="card-text">By : {card.brandName}</p>
        <p className="card-text">Cost :{defCost}</p>
        <div className="container">
          <div className="row border ">{spawn()}</div>
        </div>
      </div>
      <div className="w-100"></div>
    </div>
  );
};

export default Card;
