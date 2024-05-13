import React from "react";
import EndGameBanner from "../EndGameBanner";
import ResetButton from "../ResetButton";

function GuessInput({
  handleSubmitGuess,
  gameStatus,
  guesses,
  answer,
  handleRestart,
}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  const turns = guesses.length;

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ tentativeGuess });
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="guess-input-wrapper"
        style={{ textAlign: "center" }}
      >
        <label htmlFor="guess-input">Enter Guess:</label>
        {gameStatus === "running" ? (
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
          <>
            <EndGameBanner
              turns={turns}
              gameStatus={gameStatus}
              answer={answer}
            />
            <ResetButton handleRestart={handleRestart} />
          </>
        )}
      </form>
    </>
  );
}

export default GuessInput;
