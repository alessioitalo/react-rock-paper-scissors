import { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Container from './components/Container';
import Circle from './components/Circle';
import Rules from './components/Rules';
import Modal from './components/Modal';

function App() {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [playerChoice, setPlayerChoice] = useState();
  const [houseChoice, setHouseChoice] = useState();
  const [playing, setPlaying] = useState(false);

  const showRulesHandler = () => {
    setShowRules(!showRules);
  };

  const playerChoiceHandler = (id) => {
    setPlayerChoice(id);
    const houseChoices = ['paper', 'rock', 'scissors'];
    setHouseChoice(
      houseChoices[Math.floor(Math.random() * houseChoices.length)]
    );
    setPlaying(true);
    console.log('house has chosen..' + houseChoice);
  };

  // useEffect(()=>{
  //   console.log('player choice is...' + playerChoice)

  // }, [playerChoice])

  return (
    <div className='App'>
      {showRules && (
        <div className='backdrop'>
          <Modal onClick={showRulesHandler} />
        </div>
      )}
      <Scoreboard score={score} />
      {!playing && (
        <Container>
          <span>
            <div className='top' />
            <div className='left' />
            <div className='right' />
            <Circle type='paper' onClick={playerChoiceHandler} />
            <Circle type='scissors' onClick={playerChoiceHandler} />
          </span>
          <Circle type='rock' onClick={playerChoiceHandler} />
        </Container>
      )}
      {playing && (
        <div>
          <Circle type={playerChoice} />
          <Circle type={houseChoice} />
        </div>
      )}
      <Rules onClick={showRulesHandler} />
    </div>
  );
}

export default App;
