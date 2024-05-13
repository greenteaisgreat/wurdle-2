import React from "react";

function ResetButton({ handleRestart }) {
  return (
    <>
      <button className="reset" onClick={handleRestart}>
        Try Again?
      </button>
    </>
  );
}

export default ResetButton;
