import React, { Component } from "react";
import Left from "./leftContainer";

class Main extends Component {
  // Temporary Data until Api is made
  state = {
    cards: [
      {
        id: 1,
        productName: "Sample 1",
        brandName: "Apple",
        variant: [
          {
            type: "default",
            variationId: "PRODUCT_ID_1_VAR_ID_0",
            cost: 123,
            color: "red",
            months: ["November", "December", "January"],
          },
          {
            type: "variation",
            variationId: "PRODUCT_ID_1_VAR_ID_1",
            cost: 106,
            color: "black",
            months: ["November", "December", "January"],
          },
        ],
      },
      {
        id: 2,
        productName: "Sample 2",
        brandName: "Google",
        variant: [
          {
            type: "default",
            variationId: "PRODUCT_ID_2_VAR_ID_0",
            cost: 225,
            color: "green",
            months: ["January", "Feburary"],
          },
          {
            type: "variation",
            variationId: "PRODUCT_ID_2_VAR_ID_1",
            cost: 350,
            color: "blue",
            months: ["January", "February", "March"],
          },
          {
            type: "variation",
            variationId: "PRODUCT_ID_2_VAR_ID_3",
            cost: 25,
            color: "red",
            months: ["Feburary"],
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">
            <h2>Assignment</h2>
          </span>
        </nav>
        {/* <div className="row">
          <div className="col-md-4 border"> */}
        <Left key={this.state.cards.id} cards={this.state.cards} />
        {/* </div> */}
        {/* <div className="col-md-8 border">
            <Right key={this.state.cards.id} cards={this.state.cards} />
          </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Main;
