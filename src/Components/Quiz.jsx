import React, { useState, useContext } from "react";
import { QuizContext } from "../Extras/Contexts";
import {questions} from '../Extras/QuestionBank';

function Quiz() {
     const { score, setScore, setGameState } = useContext(QuizContext);

     const [currQuestion, setCurrQuestion] = useState(0);
     const [optionChosen, setOptionChosen] = useState("");

     const nextQuestion = () => {
          if (questions[currQuestion].answer === optionChosen) {
               setScore(prevScore => prevScore + 1);
          }
          setCurrQuestion(currQuestion + 1);
     }

     const finishQuiz = () => {
          if (questions[currQuestion].answer === optionChosen) {
               setScore(prevScore => prevScore + 1);
          }
          setGameState("endScreen");
     }

     return (
          <div className="quiz">
               <h1>{questions[currQuestion].prompt}</h1>
               <div className="options">
                    <button onClick={() => setOptionChosen("A")}>{questions[currQuestion].optionA}</button>
                    <button onClick={() => setOptionChosen("B")}>{questions[currQuestion].optionB}</button>
                    <button onClick={() => setOptionChosen("C")}>{questions[currQuestion].optionC}</button>
                    <button onClick={() => setOptionChosen("D")}>{questions[currQuestion].optionD}</button>
               </div>
               
               {currQuestion === questions.length - 1 ? (
                    <button onClick={finishQuiz}>Finish Quiz</button>
               ) : (
               <button onClick={nextQuestion}>Next Question</button>
               )}
          </div>
     );
}

export default Quiz;