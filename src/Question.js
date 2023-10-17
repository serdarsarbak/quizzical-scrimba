import React from "react";
import "./style.css";

export default function Question({
  items,
  handleClick,
  checkAnswer,
  quest,
  index,
  playagain,
  correctArray
}) {
  const [clicked, setClicked] = React.useState([false, false, false, false]);

  function handle(index) {
    setClicked((old) => {
      let newone = [false, false, false, false];
      newone[index] = true;
      return newone;
    });
  }

  React.useEffect(() => {
    setClicked([false, false, false, false]);
  }, [playagain]);

  return (
    <>
      <button
        className={`${
          checkAnswer && correctArray === 0
            ? "correctans-btn answer-btn"
            : "answer-btn"
        }`}
        style={{
          backgroundColor:
            checkAnswer && correctArray === 0
              ? "#94D7A2"
              : checkAnswer && clicked[0] && correctArray !== 0
              ? "#F8BCBC"
              : clicked[0]
              ? "#D6DBF5"
              : ""
        }}
        disabled={checkAnswer}
        onClick={() => {
          handle(0);
          handleClick(index, items.answerone);
        }}
      >
        {items.answerone}
      </button>

      <button
        className={`${
          checkAnswer && correctArray === 1
            ? "correctans-btn answer-btn"
            : "answer-btn"
        }`}
        style={{
          backgroundColor:
            checkAnswer && correctArray === 1
              ? "#94D7A2"
              : checkAnswer && clicked[1] && correctArray !== 1
              ? "#F8BCBC"
              : clicked[1]
              ? "#D6DBF5"
              : ""
        }}
        disabled={checkAnswer}
        onClick={() => {
          handle(1);
          handleClick(index, items.answertwo);
        }}
      >
        {items.answertwo}
      </button>

      <button
        className={`${
          checkAnswer && correctArray === 2
            ? "correctans-btn answer-btn"
            : "answer-btn"
        }`}
        style={{
          backgroundColor:
            checkAnswer && correctArray === 2
              ? "#94D7A2"
              : checkAnswer && clicked[2] && correctArray !== 2
              ? "#F8BCBC"
              : clicked[2]
              ? "#D6DBF5"
              : ""
        }}
        disabled={checkAnswer}
        onClick={() => {
          handle(2);
          handleClick(index, items.answerthree);
        }}
      >
        {items.answerthree}
      </button>

      <button
        className={`${
          checkAnswer && correctArray === 3
            ? "correctans-btn answer-btn"
            : "answer-btn"
        }`}
        style={{
          backgroundColor:
            checkAnswer && correctArray === 3
              ? "#94D7A2"
              : checkAnswer && clicked[3] && correctArray !== 3
              ? "#F8BCBC"
              : clicked[3]
              ? "#D6DBF5"
              : ""
        }}
        disabled={checkAnswer}
        onClick={() => {
          handle(3);
          handleClick(index, items.answerfour);
        }}
      >
        {items.answerfour}
      </button>
    </>
  );
}
