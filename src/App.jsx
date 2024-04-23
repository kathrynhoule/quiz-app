import React, { useState } from "react";

function App() {
     const [gameState, setGameState] = useState("menu");

     return (
          <div className="app">
               <h1>Quiz App</h1>
          </div>
     );
}

export default App;