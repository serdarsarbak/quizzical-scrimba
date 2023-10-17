import React from "react";
import Questions from "./Questions";
import Result from "./Result";
import Start from "./Start";
import { decode } from "html-entities";
import "./style.css";
import imgTop from "./images/img-top.png";
import imgBottom from "./images/img-bottom.png";

export default function App() {
  const [questions, setQuestions] = React.useState([]);
  const [allQuestions, setAllQuestions] = React.useState([]);
  const [choice, setChoice] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });
  const [quest, setQuest] = React.useState([]);
  const [answerArray, setAnswerArray] = React.useState([]);
  const [checkAnswer, setCheckAnswer] = React.useState(false);
  const [playagain, setPlayagain] = React.useState(false);
  const [num, Setnum] = React.useState(0);
  const [start, setStart] = React.useState(true);
  const [correctArray, setCorrectArray] = React.useState([]);

  function handleClick(index, answer) {
    if (quest[index].correctanswer === answer) {
      choice[index] = true;
    } else {
      choice[index] = false;
    }
  }

  function toggle() {
    setStart(!start);
  }

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function checkAns() {
    let numCorrect = 0;
    for (let i = 0; i < quest.length; i++) {
      if (choice[i] === true) {
        numCorrect++;
      }
    }
    Setnum(numCorrect);
    setCheckAnswer(true);
  }

  function newGame() {
    setPlayagain((oldPlay) => !oldPlay);
    setChoice({ 0: false, 1: false, 2: false, 3: false, 4: false });
    Setnum(0);
    setCheckAnswer(false);
  }

  const fetchquestion = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    );
    const newquestion = await response.json();
    setQuestions(newquestion.results);
  };

  React.useEffect(() => {
    fetchquestion();
  }, [playagain]);

  React.useEffect(() => {
    const questi = questions.map((question) => {
      return {
        question: decode(question.question),
        correctanswer: decode(question.correct_answer),
        incorrectanswerone: decode(question.incorrect_answers[0]),
        incorrectanswertwo: decode(question.incorrect_answers[1]),
        incorrectanswerthree: decode(question.incorrect_answers[2])
      };
    });

    const randomanswers = questi.map((item, index) => {
      let ss = [
        item.correctanswer,
        item.incorrectanswerone,
        item.incorrectanswertwo,
        item.incorrectanswerthree
      ];
      shuffle(ss);
      let find = ss.indexOf(item.correctanswer);
      setCorrectArray((old) => {
        let newold = [...old];
        newold[index] = find;
        return newold;
      });

      return {
        question: item.question,
        answerone: ss[0],
        answertwo: ss[1],
        answerthree: ss[2],
        answerfour: ss[3]
      };
    });

    setAnswerArray(randomanswers);
    setQuest(questi);
  }, [questions]);

  if (start === true) {
    return (
      <main>
        <img className="img-top" src={imgTop} alt="Image Top" />
        <img className="img-bottom" src={imgBottom} alt="Image Bottom" />
        <Start start={start} toggle={toggle} />
      </main>
    );
  } else {
    return (
      <main>
        <img className="img-top" src={imgTop} alt="Image Top" />

        <section className="questions-section">
          <Questions
            quest={answerArray}
            items={allQuestions}
            handleClick={handleClick}
            checkAnswer={checkAnswer}
            playagain={playagain}
            correctArray={correctArray}
          />

          {!checkAnswer && (
            <button className="checkanswer-btn" onClick={() => checkAns()}>
              Check Answers
            </button>
          )}
          {checkAnswer && (
            <>
              {" "}
              <Result
                num={num}
                newGame={newGame}
                checkAnswer={checkAnswer}
              />{" "}
            </>
          )}
        </section>
      </main>
    );
  }
}
