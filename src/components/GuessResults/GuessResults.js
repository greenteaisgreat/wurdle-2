import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
//helper function to generate arrays of a specified length
import { range } from "../../utils";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {/* Generates the game's grid */}
      {range(6).map((num) => (
        <Guess
          //Checks for a value; if none, an empty string populates the value
          value={guesses ? guesses[num] : ""}
          key={`${num}-${Math.random()}`}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;
