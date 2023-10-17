import React from "react";

export default function Start({ start, toggle }) {
  return (
    <main className="starter-background">
      <div className="starter">
        <h1 className="header">Quizzical</h1>

        <button onClick={() => toggle()} className="start-btn">
          Start quiz
        </button>
      </div>
    </main>
  );
}
