import React from "react";
import Card from "./card";
import "./roundButton.css";

const Right = (props) => {
  const spawnCard = (cardType, card) => {
    return <Card key={cardType.variationId} card={card} cardType={cardType} />;
  };

  const defaultOnly = () => {
    let spawnCards = [];
    for (let i = 0; i < props.cards.length; i++) {
      let types = props.cards[i].variant;
      let card = props.cards[i];
      for (let j = 0; j < types.length; j++) {
        if (types[j].type === "default") {
          spawnCards.push(spawnCard(types[j], card));
        }
      }
    }
    return spawnCards;
  };
  return (
    <div className="col-md-12">
      <div className="container">{defaultOnly()}</div>
    </div>
  );
};

export default Right;
