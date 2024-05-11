import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <Guess
          value={guesses ? guesses[num] : ""}
          key={`${num}-${Math.random()}`}
        />
      ))}
    </div>
  );
}

export default GuessResults;
