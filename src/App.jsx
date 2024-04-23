import React, { useState, useContext } from "react";
import './App.css';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Extras/Contexts";

function App() {
     const [gameState, setGameState] = useState("menu");

     return (
          <div className="app">
               <h1>Quiz App</h1>

               <QuizContext.Provider value={{ gameState, setGameState }}>
               {gameState === "menu" && <MainMenu />}
               {gameState === "quiz" && <Quiz />}
               {gameState === "endScreen" && <EndScreen />}
               </QuizContext.Provider>
          </div>
     );
}

export default App;