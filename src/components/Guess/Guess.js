import React from "react";
//helper function to generate an array of a given length
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <>
      <p className="guess">
        {/* Generates the guess row */}
        {range(5).map((num, i) => (
          // generates a span to hold the letter, or an empty string if no value exists
          <span key={`${num}-${Math.random()}`} className="cell">
            {value ? value[num] : ""}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
