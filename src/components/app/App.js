import './App.css';
import { useState } from 'react';
import Scoreboard from '../scoreboard/scoreboard';
import ScoreboardOperations from '../scoreboardOperations/ScoreboardOperations'
function App() {
  const [score, setScore] = useState(0);  // Initialize score with 0
  function IncrementCounter(value) { 
    setScore(prevScore => prevScore + value);  // Using the function update form with the passed value
    console.log(score);
  }
  return (
    <div>
      <Scoreboard score={score}/>
      <ScoreboardOperations incrementScore={IncrementCounter}/>
  </div>
   
  )
  
}

export default App;
