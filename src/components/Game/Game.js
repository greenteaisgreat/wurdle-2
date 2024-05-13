import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

function Game() {
  //statuses include running / won / lost
  const [gameStatus, setGameStatus] = React.useState("running");
  //array containing the selection of user's guesses
  const [guesses, setGuesses] = React.useState([]);
  //establishes a new word upon game reset
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  // // log the answer to those of culture 😚
  console.info({ answer }, "I see you, too, are a person of culture 😌");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    //game logic to determine a win or lose scenario
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  //resets the game with a new answer
  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
        guesses={guesses}
        answer={answer}
        handleRestart={handleRestart}
      />
    </>
  );
}

export default Game;
