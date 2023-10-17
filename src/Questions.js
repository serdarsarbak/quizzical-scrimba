import React from "react";
import Question from "./Question";
import "./style.css";

export default function Questions({
  items,
  handleClick,
  checkAnswer,
  quest,
  playagain,
  correctArray
}) {
  console.log(quest);
  const render = quest.map((item, index) => {
    return (
      <div key={item.question}>
        <h4 className="questions">{item.question}</h4>
        <Question
          items={item}
          handleClick={handleClick}
          checkAnswer={checkAnswer}
          quest={quest}
          index={index}
          playagain={playagain}
          correctArray={correctArray[index]}
        />
        <hr />
      </div>
    );
  });

  return (
    <>
      <div>{render}</div>
    </>
  );
}
