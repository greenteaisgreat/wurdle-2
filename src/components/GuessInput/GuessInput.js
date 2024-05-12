import React from "react";
import EndGameBanner from "../EndGameBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ handleSubmitGuess, guesses, answer }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  let hasWon = false;

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ tentativeGuess });
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter Guess:</label>
        {guesses.length < NUM_OF_GUESSES_ALLOWED ? (
          <input
            required
            id="guess-input"
            type="text"
            placeholder="Listen to Your Instincts..."
            value={tentativeGuess}
            pattern="[a-z, A-Z]{5,5}"
            maxLength={5}
            title="Enter 5 Letters (No Numbers/Symbols)"
            onChange={(e) => {
              setTentativeGuess(e.target.value.toUpperCase());
            }}
          ></input>
        ) : (
          <EndGameBanner
            hasWon={hasWon}
            answer={answer}
            turns={guesses.length}
          />
        )}
      </form>
    </>
  );
}

export default GuessInput;
