import React, { useContext } from "react";
import '../App.css';
import { QuizContext } from "../Extras/Contexts";

function MainMenu() {
     const { gameState, setGameState } = useContext(QuizContext);

     return (
          <div className="main-menu">
               <h1>Main Menu</h1>
               <button onClick={() => {setGameState("quiz")}}>Start Quiz</button>
          </div>
     );
}

export default MainMenu;