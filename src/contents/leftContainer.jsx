import React, { useState } from "react";
import Card from "./card";
import Right from "./rightContainer";

const Left = (props) => {
  //const [month, setMonth] = useState("1");
  const [color, setColor] = useState("No Color");
  const handleChange = (changeEvent) => {
    setColor(changeEvent.target.value);
    //console.log(color);
  };

  const spawnCard = (cardType, card) => {
    return <Card key={cardType.variationId} card={card} cardType={cardType} />;
  };

  const getCards = () => {
    let spawnCards = [];
    for (let i = 0; i < props.cards.length; i++) {
      let types = props.cards[i].variant;
      let card = props.cards[i];
      let f = false;
      let index;
      for (let j = 0; j < types.length; j++) {
        if (types[j].color === color) {
          f = true;
          index = j;
        }
      }
      if (f) {
        spawnCards.push(spawnCard(types[index], card));
      }
    }
    return spawnCards;
  };

  const casesCheck = () => {
    if (color === "No Color")
      return <Right key={props.cards.id} cards={props.cards} />;
    else return getCards();
  };
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="col-md-12 ">
          <div className="border rounded m-4">
            <div className="radio m-2">
              <label>
                <input
                  value="No Color"
                  type="radio"
                  name="optradio"
                  checked={color === "No Color"}
                  onChange={handleChange}
                />{" "}
                All Cards
              </label>
            </div>
            <div className="radio m-2">
              <label>
                <input
                  value="red"
                  type="radio"
                  name="optradio"
                  checked={color === "red"}
                  onChange={handleChange}
                />{" "}
                Red
              </label>
            </div>
            <div className="radio m-2">
              <label>
                <input
                  value="blue"
                  type="radio"
                  name="optradio"
                  checked={color === "blue"}
                  onChange={handleChange}
                />{" "}
                Blue
              </label>
            </div>
            <div className="radio m-2">
              <label>
                <input
                  value="green"
                  type="radio"
                  name="optradio"
                  checked={color === "green"}
                  onChange={handleChange}
                />{" "}
                Green
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 border">{casesCheck()}</div>
    </div>
  );
};

export default Left;
