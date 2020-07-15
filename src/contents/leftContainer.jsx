import React, { useState } from "react";

const Left = (props) => {
  const [month, setMonth] = useState("1");
  const handleChange = (changeEvent) => {
    setMonth(changeEvent.target.value);
    renderCards();
  };

  const renderCards = () => {};
  return (
    <div className="col-md-12 ">
      <div className="border rounded m-4">
        <div className="radio m-2">
          <label>
            <input
              value="1"
              type="radio"
              name="optradio"
              checked={month === "1"}
              onChange={handleChange}
            />{" "}
            All Months
          </label>
        </div>
        <div className="radio m-2">
          <label>
            <input
              value="2"
              type="radio"
              name="optradio"
              checked={month === "2"}
              onChange={handleChange}
            />{" "}
            February
          </label>
        </div>
        <div className="radio m-2">
          <label>
            <input
              value="3"
              type="radio"
              name="optradio"
              checked={month === "3"}
              onChange={handleChange}
            />{" "}
            March
          </label>
        </div>
        <div className="radio m-2">
          <label>
            <input
              value="4"
              type="radio"
              name="optradio"
              checked={month === "4"}
              onChange={handleChange}
            />{" "}
            April
          </label>
        </div>
      </div>
    </div>
  );
};

export default Left;
