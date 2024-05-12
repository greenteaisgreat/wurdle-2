import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function EndGameBanner({ hasWon, answer, turns }) {
  return (
    <>
      {hasWon ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it
            {turns === NUM_OF_GUESSES_ALLOWED ? (
              <strong style={{ color: "goldenrod" }}>
                {" "}
                ON THE LAST GUESS!
              </strong>
            ) : (
              <strong style={{ color: "goldenrod" }}>
                {" "}
                in {turns} guesses.
              </strong>
            )}
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is{" "}
            <strong style={{ color: "gold" }}>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default EndGameBanner;
