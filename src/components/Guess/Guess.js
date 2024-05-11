import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <>
      <p className="guess">
        {range(5).map((num, i) => (
          <span key={`${num}-${Math.random()}`} className="cell">
            {value ? value[num] : ""}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;