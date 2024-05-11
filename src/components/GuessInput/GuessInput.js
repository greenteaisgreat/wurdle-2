import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

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
        <input
          required
          id="guess-input"
          type="text"
          value={tentativeGuess}
          pattern="[a-z, A-Z]{5,5}"
          maxLength={5}
          title="Enter 5 Letters"
          onChange={(e) => {
            setTentativeGuess(e.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
