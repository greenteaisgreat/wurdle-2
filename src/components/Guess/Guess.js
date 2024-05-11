import React from "react";
//helper function to generate an array of a given length
import { range } from "../../utils";
//another helper to determine a letter's tile color
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  return (
    <>
      <p className="guess">
        {/* Generates the guess row */}
        {range(5).map((num, i) => (
          // generates a span to hold the letter, or an empty string if no value exists
          <span
            key={`${num}-${Math.random()}`}
            className={
              //generates a colored tile, based on the correctness
              //of a letter, or the regular styling if no guess has been logged
              checkGuess(value, answer)
                ? `cell ${checkGuess(value, answer)[i].status}`
                : "cell"
            }
          >
            {value ? value[num] : ""}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
