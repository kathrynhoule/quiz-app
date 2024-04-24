import React, { useContext } from "react";
import { QuizContext } from "../Extras/Contexts";
import { questions } from "../Extras/QuestionBank";

function EndScreen() {
     const { score, setScore, setGameState } = useContext(QuizContext);

     const restartQuiz = () => {
          setScore(0);
          setGameState("menu");
     };

     return (
          <div className="end-screen">
               <h1>Quiz Completed!</h1>
               <h3> {score} / {questions.length} </h3>
               <button onClick={restartQuiz}> Retry Quiz </button>
          </div>
     );
}

export default EndScreen;