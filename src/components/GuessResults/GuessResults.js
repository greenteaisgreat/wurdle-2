import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <p className="guess" key={`${guess}-${Math.random()}`}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
