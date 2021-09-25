import { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import Container from './components/Container';
import Circle from './components/Circle';
import Rules from './components/Rules';
import Modal from './components/Modal';

function App() {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);

  const showRulesHandler = () => {
    setShowRules(!showRules);
  };

  const playerChoiceHandler = () => {
    console.log('clicked')
    // setPlayerChoice(id);
  };

  useEffect(()=>{
    console.log('player choice is...' + playerChoice)
  }, [playerChoice])

  return (
    <div className='App'>
      {showRules && (
        <div className='backdrop'>
          <Modal onClick={showRulesHandler} />
        </div>
      )}
      <Scoreboard score={score} />
      <Container>
        <span>
        <div className="top" />
        <div className="left" />
        <div className="right" />
          <Circle type='paper' onClick={playerChoiceHandler} />
          <Circle type='scissors' onClick={playerChoiceHandler} />
        </span>
        <Circle type='rock' onClick={playerChoiceHandler} />
      </Container>
      <Rules onClick={showRulesHandler} />
    </div>
  );
}

export default App;
