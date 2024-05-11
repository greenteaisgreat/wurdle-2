import React from "react";
import Guess from "../Guess";
import NUM_OF_GUESSES_ALLOWED from "../../constants";
import range from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess value={guess} key={`${guess}-${Math.random()}`} />
      ))}
    </div>
  );
}

export default GuessResults;
