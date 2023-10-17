import React from "react";

export default function Result({ num, checkAnswer, newGame }) {
  return (
    <section className="newgame-section">
      <p className="result">You have {num}/5 correct answers</p>
      <button className="result-btn" onClick={() => newGame()}>
        New Game
      </button>
    </section>
  );
}
